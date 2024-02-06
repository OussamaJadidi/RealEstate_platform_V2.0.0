"use client";
import { useCallback, useMemo, useState } from "react";
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
  setEnablingSubmit: (state: boolean)=> void
};

export default function UploadImages({
  images,
  updateData,
  currentStepIndex,
  setEnablingSubmit
}: UploadImagesProps) {
  const { edgestore } = useEdgeStore();
  const [urls, setUrls] = useState<{ key: string, url: string }[]>([]);
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  // const indexOfUnusedURLs = useRef<number[]>([])

  console.log("urls: ", urls);
  console.log("fileStates : ", fileStates);
    
    const whatever = useMemo(() => {
      // when the user click the X button the fileStates keep the uploaded files (states) and remove the unWanted files (since you click the X button)
      // So now I filter the fileStates so i have and Array include just the keys
      const fileStatesKeys: string[] = fileStates.reduce(
        (fileStatesKeysArray: string[], fileState: FileState, index: number) => {
          fileStatesKeysArray.push(fileState.key)
          return fileStatesKeysArray
        },
        []
      );
    
      // since in fileStatesKeys our keys are arranged exactly how our images are uploaded
      // we replace the urls.key with the actual urls.url
      const imagesArray = fileStatesKeys.map((key)=>{ 
        const urlObject = urls.find(n=> n.key == key)
        return urlObject?.url
      })
      const imagesArrayAsJSON = JSON.stringify(imagesArray)
      return updateData({images: imagesArrayAsJSON})
    }, [urls]);

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
  const fileStatesIsCompleted= useMemo(()=>{return fileStates.every(
    (n) => n.progress == "COMPLETE"
  );},[fileStates])
  const whatEEver = useMemo(() => {
    return setEnablingSubmit(fileStatesIsCompleted);
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
        {fileStatesIsCompleted && (
          <button
            type="button"
            className="flex justify-center items-center gap-4 my-12 bg-red-600 text-white  font-semibold px-8 py-2 rounded-md"
            onClick={() => {
              setFileStates([]);
              setUrls([]);
              updateData({ images: undefined });
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
