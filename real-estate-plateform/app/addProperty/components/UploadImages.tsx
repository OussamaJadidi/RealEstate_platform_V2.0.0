"use client";
import { useMemo, useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import {
  type FileState,
  MultiImageDropzone,
} from "@/components/MultiImageDropzone";

type ImagesProps = {
  images: string;
  currentStepIndex?: number;
};
type UploadImagesProps = ImagesProps & {
  updateData: (updatedData: Partial<ImagesProps>) => void;
  setEnablingSubmit: (state: boolean) => void;
  enablingSubmit: boolean;
};

export default function UploadImages({
  images,
  updateData,
  currentStepIndex,
  setEnablingSubmit,
  enablingSubmit,
}: UploadImagesProps) {
  const { edgestore } = useEdgeStore();
  const [urls, setUrls] = useState<{ key: string; url: string }[]>([]);
  const [fileStates, setFileStates] = useState<FileState[]>([]);

  console.log("urls: ", urls);
  console.log("fileStates : ", fileStates);
  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  const fileStatesIsCompleted = useMemo(() => {
    if (fileStates.length == 0) return false;

    const urlsKeys: string[] = urls.reduce(
      (urlsKeysArray: string[], urls: { key: string; url: string }) => {
        urlsKeysArray.push(urls.key);
        return urlsKeysArray;
      },
      []
    );
    const everyFileStateURlHaveAnURL = fileStates.every((n) =>
      urlsKeys.includes(n.key)
    );
    console.log("everyFileStateURlHaveAnURL", everyFileStateURlHaveAnURL);
    return everyFileStateURlHaveAnURL;
  }, [urls, fileStates]);

  function g() {
    console.log("the G is open");
    if (fileStatesIsCompleted == true) {
      // filter the fileStates so i have an Array include just the keys
      const fileStatesKeys: string[] = fileStates.reduce(
        (
          fileStatesKeysArray: string[],
          fileState: FileState,
          index: number
        ) => {
          fileStatesKeysArray.push(fileState.key);
          return fileStatesKeysArray;
        },
        []
      );
      // since the keys in fileStatesKeys are arranged exactly how our images are uploaded
      // we replace them (keys in fileStatesKeys) with the actual urls
      const imagesArray = fileStatesKeys.map((key) => {
        const urlObject = urls.find((n) => n.key == key);
        return urlObject?.url;
      });
      // so push the images array to The Database as JSON
      console.log("here is array images bro", imagesArray);
      const imagesArrayAsJSON = JSON.stringify(imagesArray);
      console.log("here is your images bro", imagesArrayAsJSON);
      updateData({ images: imagesArrayAsJSON });
      setEnablingSubmit(true);
    } else {
      setEnablingSubmit(false);
    }
  }
  const EnableSubmit = useMemo(() => {
    g();
  }, [fileStatesIsCompleted]);

  return (
    <div className={`Container  ${currentStepIndex !== 3 ? "hidden" : ""}`}>
      <h1 className="font-bold wrapper text-black text-[1.5rem] p-4 pb-2">
        Upload the property's Pictures
      </h1>
      <h2 className="wrapper font-semibold text-gray-500 text-[1.2rem] px-4 pb-6">
        Upload Up to 6 Images
      </h2>
      <div className=" px-8 wrapper">
        {currentStepIndex == 3 && ( // I did that trick so when the user press "enter" key in the early pages form it not openening the folder of selecting files
          <MultiImageDropzone
            value={fileStates}
            dropzoneOptions={{
              maxFiles: 6,
            }}
            onChange={(files) => {
              setFileStates(files);
            }}
            onFilesAdded={async (addedFiles) => {
              setFileStates([...fileStates, ...addedFiles]);
              await Promise.all(
                addedFiles.map(async (addedFileState) => {
                  try {
                    const res = await edgestore.myPublicImages.upload({
                      file: addedFileState.file as File,
                      input: { type: "property" },

                      onProgressChange: async (progress) => {
                        updateFileProgress(addedFileState.key, progress);
                        if (progress === 100) {
                          // wait 1 second to set it to complete
                          // so that the user can see the progress bar at 100%
                          await new Promise((resolve) =>
                            setTimeout(resolve, 1000)
                          );
                          updateFileProgress(addedFileState.key, "COMPLETE");
                        }
                      },
                      options: {
                        temporary: true,
                      },
                    });
                    setUrls((prevUrls) => [
                      ...prevUrls,
                      { key: addedFileState.key, url: res.url },
                    ]);
                  } catch (err) {
                    updateFileProgress(addedFileState.key, "ERROR");
                  }
                })
              );
            }}
          />
        )}
        {enablingSubmit && (
          <button
            type="button"
            className="flex justify-center items-center gap-4 my-12 bg-red-600 text-white  font-semibold px-8 py-2 rounded-md"
            onClick={() => {
              setFileStates([]);
              setUrls([]);
              updateData({ images: undefined });
            }}
          >
            Reset Uploads
          </button>
        )}
      </div>
    </div>
  );
}
