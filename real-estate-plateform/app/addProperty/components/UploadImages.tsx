"use client";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  type FileState,
  MultiImageDropzone,
} from "@/components/MultiImageDropzone";

type ImagesProps = {
  images: string[] | undefined;
  currentStepIndex?: number;
};
type UploadImagesProps = ImagesProps & {
  updateData: (updatedData: Partial<ImagesProps>) => void;
};

export default function UploadImages({
  images,
  updateData,
  currentStepIndex,
}: UploadImagesProps) {
  const { edgestore } = useEdgeStore();
  const [urls, setUrls] = useState<string[]>([]);
  const [fileStates, setFileStates] = useState<FileState[]>([]);

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
  return (
    <div className={`Container  ${currentStepIndex !== 3 ? "hidden" : ""}`}>
      <h1 className="font-bold wrapper text-black text-[1.5rem] p-4 pb-2">
        Upload the property's Pictures
      </h1>
        <h2 className="wrapper font-semibold text-gray-500 text-[1.2rem] px-4 pb-6">
          Upload Up to 7 Images
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
                  setUrls((prevUrls) => [...prevUrls, res.url]);
                  console.log(res);
                } catch (err) {
                  updateFileProgress(addedFileState.key, "ERROR");
                }
              })
            );
          }}
        />
        <button
          type="submit"
          className="flex justify-center items-center gap-4 my-12 bg-red-600 text-white  font-semibold px-8 py-2 rounded-md"
          onClick={()=>{
            setFileStates([])
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
