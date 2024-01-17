"use client";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type ImagesProps = {
  images:  string[] | undefined,
  currentStepIndex?: number
}
type UploadImagesProps = ImagesProps & {
  updateData: (updatedData: Partial<ImagesProps>) => void
}

export default function UploadImages({images,updateData,currentStepIndex}: UploadImagesProps) {
  const { edgestore } = useEdgeStore();
  const [file,setFile] = useState<File>()
  const [urls, setUrls] = useState<string[]>([]);
  const [localUrl,setLocalUrl] = useState("")
  const [progress,setProgress] = useState<number>()
  let reader = new FileReader()
  function generateImage(){
    if(file) reader.readAsDataURL(file)
    reader.onload= function(){
      const res = reader.result as string
      setLocalUrl(res)
    }
  }
  generateImage()
  return (
    <div className={`Container ${currentStepIndex !== 3 ? "hidden" : "" }`}>
      <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">
        Upload the property's Pictures
      </h1>
      <div className="Container">
        <h2 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          Upload Up to 7 Images
        </h2>
        <label
          htmlFor="file1"
          className=" relative border border-black max-w-[40rem] mx-auto h-[20rem] flex flex-col justify-center items-center  transition-all duration-500 group"
        >
          <input
          id="file1"
            className=" hidden absolute inset-0"
            type="file"
            onChange={(e) => {
              setFile(e.target.files?.[0]);
            }}
          />
          {localUrl ? (
            <Image src={localUrl} alt ="Main Image of property" className=" w-full h-full" width="500" height="500"/>
          ) : (
            <>
              <FontAwesomeIcon
                icon={faImage}
                style={{ fontSize: "3rem" }}
                className="group-hover:opacity-0 order-1 group-hover:order-2 mt-20"
              />
              <FontAwesomeIcon
                icon={faPlus}
                style={{ fontSize: "3rem" }}
                className="opacity-0 group-hover:opacity-100 order-2 group-hover:order-1 mt-20"
              />
            </>
          )}
          {/* {file ?(
            // <Image src={()=>{let reader = new FileReader();reader.readAsDataURL(); return reader.reasult}}
          )} */}
        </label>
      <button 
       onClick={async () => {
        if (file) {
          const res = await edgestore.myPublicImages.upload({
            file,
            // input: { type: "post" },
            // // options:{
            // //   temporary: true
            // // },
            onProgressChange: (progresss) => {
              setProgress(progresss)
            },
          });
          setUrls(prev => [...prev,res.url]);
       
        }
        console.log("kmlt1")
      }}>hi</button>
        <h2 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          The images uploaded :
        </h2>
        {}
        <div className="flex flex-wrap gap-8">
        
        </div>
      </div>
     
    </div>
  );
}
