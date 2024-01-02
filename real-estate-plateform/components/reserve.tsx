"use client";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
export default function UploadImages() {
  const [file, setFile] = useState<File>();
  const [urls, setUrls] = useState<{
    url: string;
  }>();
  const [progress,setProgress] = useState<number>()
  const { edgestore } = useEdgeStore();
  return (
    <div className="Container">
      <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">
        Upload the property's Pictures
      </h1>
      <div className="Container">
        <h2 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          Upload Up to 7 Images
        </h2>
        <label
          htmlFor="file1"
          className="border border-black max-w-[40rem] mx-auto h-[20rem] flex flex-col justify-center items-center hover:bg-gray-100 transition-all duration-500 group"
        >
          <input
          id="file1"
            className="hidden"
            type="file"
            onChange={(e) => {
              setFile(e.target.files?.[0]);
            }}
          />
          {urls?.url && <Link href={urls.url} target="_blank">Url </Link>}
          {urls?.url ? (
            <Image src={urls.url} alt ="Main Image of property" width="500" height="500"/>
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
        </label>
      <button 
       onClick={async () => {
        if (file) {
          const res = await edgestore.publicFiles.upload({
            file,
            input: { type: "post" },
            options:{
              temporary: true
            },
            onProgressChange: (progresss) => {
              setProgress(progresss)
            },
          });
          setUrls({
            url: res.url,
          });
       
        }
        console.log("kmlt1")
      }}>hi</button>
        <h2 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          The images uploaded :
        </h2>
        <div className="flex flex-wrap gap-8">
        
        </div>
      </div>
      <button
        // onClick={
        //   console.log("hi")
        // }
      >
        finish the registratino
      </button>
    </div>
  );
}
