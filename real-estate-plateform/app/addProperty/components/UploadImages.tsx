"use client";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { Container } from "@/components";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
export default function UploadImages() {
  const [file, setFile] = useState<File>();
  const [urls, setUrls] = useState<{
    url: string;
  }>();
  const { edgestore } = useEdgeStore();
  return (
    <div className="Container">
      <h1 className="font-bold text-black text-[1.5rem] p-4 pb-6">
        Upload Property Images
      </h1>
      <Container>
        <h2 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          Upload The Main Image
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
        console.log("hiii")
        if (file) {
          console.log("bdit")
          const res = await edgestore.publicFiles.upload({
            file,
            input: { type: "post" },
            onProgressChange: (progress) => {
              // you can use this to show a progress bar
              console.log(progress);
            },
          });
          console.log("kmlt1")
          setUrls({
            url: res.url,
          });
          console.log("kmlt2")
          // you can run some server action or api here
          // to add the necessary data to your database
          console.log(res);
        }
        console.log("kmlt1")
      }}>hi</button>
        <h2 className="font-bold text-black text-[1.5rem] p-4 pb-6">
          Upload Other Images
        </h2>
        <div className="flex flex-wrap gap-8">
          <label
            onClick={async () => {
              if (file) {
                const res = await edgestore.publicFiles.upload({
                  file,
                  input: {type: "post"},
                  onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    console.log(progress);
                  },
                });
                // you can run some server action or api here
                // to add the necessary data to your database
                console.log(res);
              }
            }}
            htmlFor=""
            className="border border-black min-w-0 w-[40rem] mx-auto h-[20rem] flex flex-col justify-center items-center hover:bg-gray-100 transition-all duration-500 group"
          >
            <input
              className="hidden"
              type="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
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
          </label>
          <label
            onClick={async () => {
              if (file) {
                const res = await edgestore.publicFiles.upload({
                  file,
                  input: {type: "post"},
                  onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    console.log(progress);
                  },
                });
                // you can run some server action or api here
                // to add the necessary data to your database
                console.log(res);
              }
            }}
            htmlFor=""
            className="border border-black min-w-0 w-[40rem] mx-auto h-[20rem] flex flex-col justify-center items-center hover:bg-gray-100 transition-all duration-500 group"
          >
            <input
              className="hidden"
              type="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
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
          </label>
          <label
            onClick={async () => {
              if (file) {
                const res = await edgestore.publicFiles.upload({
                  file,
                  input: {type: "post"},
                  onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    console.log(progress);
                  },
                });
                // you can run some server action or api here
                // to add the necessary data to your database
                console.log(res);
              }
            }}
            htmlFor=""
            className="border border-black min-w-0 w-[40rem] mx-auto h-[20rem] flex flex-col justify-center items-center hover:bg-gray-100 transition-all duration-500 group"
          >
            <input
              className="hidden"
              type="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
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
          </label>
          <label
            onClick={async () => {
              if (file) {
                const res = await edgestore.publicFiles.upload({
                  file,
                  input:{ type: "post"},
                  onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    console.log(progress);
                  },
                });
                // you can run some server action or api here
                // to add the necessary data to your database
                console.log(res);
              }
            }}
            htmlFor=""
            className="border border-black min-w-0 w-[40rem] mx-auto h-[20rem] flex flex-col justify-center items-center hover:bg-gray-100 transition-all duration-500 group"
          >
            <input
              className="hidden"
              type="file"
              onChange={(e) => {
                setFile(e.target.files?.[0]);
              }}
            />
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
          </label>
        </div>
      </Container>
    </div>
  );
}
