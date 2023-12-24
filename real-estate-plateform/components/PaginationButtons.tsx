"use client";
import {
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationButtons() {
  const router = useRouter();
  const params = useSearchParams()
  const urlParams = new URLSearchParams(params)
  if(!urlParams.has("page")){
    urlParams.append("page","1")
  }
  let page = urlParams.get("page");
 
  const lastPage = 555; //the length of the data divided by 10
  
  let notInTheFitstPage = true;
  if (Number(page) === 1) {
    notInTheFitstPage = false;
  }
  let notInTheLastPage = true;
  if (Number(page) === lastPage) {
    notInTheLastPage = false;
  }

  function handleFirstPage() {
    urlParams.delete("page")
    urlParams.append("page","1")
    router.push(`/properties?${urlParams}`);
  }
  function handlePreviousPage() {
    if (Number(page) > 1) {
      const previousPageNumber = Number(page) - 1;
      urlParams.delete("page")
      urlParams.append("page",previousPageNumber.toString())
      router.push(`/properties?${urlParams}`);
    }
  }
  function handleNextPage() {
    if (Number(page) < lastPage) {
      const previousPageNumber = Number(page) + 1;
      urlParams.delete("page")
      urlParams.append("page",previousPageNumber.toString())
      router.push(`/properties?${urlParams}`);
    }
  }
  function handleLastPage() {
    urlParams.delete("page")
    urlParams.append("page",lastPage.toString())
    router.push(`/properties?${urlParams}`);

  }
  function handleClickableNumberPage(number: Number) {
    urlParams.delete("page")
    urlParams.append("page",number.toString())
    router.push(`/properties?${urlParams}`);

  }

  return (
    <div className="flex gap-1 w-full justify-center py-[3rem] ">
    
      {notInTheFitstPage && (
        <Button
          variant="outline"
          size="icon"
          className="!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white"
          onClick={handleFirstPage}
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
      )}
      <Button
        variant="outline"
        size="icon"
        className={`!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white ${Number(page) === 1 ? "cursor-not-allowed" : ""}`}
        onClick={handlePreviousPage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {Number(page) === Number(lastPage)  && (
        <Button
          variant="outline"
          size="icon"
          className="!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white"
          onClick={() => handleClickableNumberPage(Number(page) - 2)}
        >
          {Number(page) - 2}
        </Button>
      )}
      {Number(page) > Number(lastPage) - 2 && (
        <Button
          variant="outline"
          size="icon"
          className="!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white"
          onClick={() => handleClickableNumberPage(Number(page) - 1)}
        >
          {Number(page) - 1}
        </Button>
      )}

      <Button
        variant="outline"
        size="icon"
        className=" !bg-blue-800 text-white hover:!bg-blue-800 hover:opacity-60 hover:text-white"
        onClick={() => handleClickableNumberPage(Number(page))}
      >
        {Number(page)}
      </Button>
      {Number(page) < Number(lastPage)  && (
        <Button
          variant="outline"
          size="icon"
          className="!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white"
          onClick={() => handleClickableNumberPage(Number(page) + 1)}
        >
          {Number(page) + 1}
        </Button>
      )}
      {Number(page) < Number(lastPage) - 1 && (
        <Button
          variant="outline"
          size="icon"
          className="!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white"
          onClick={() => handleClickableNumberPage(Number(page) + 2)}
        >
          {Number(page) + 2}
        </Button>
      )}

      <Button
        variant="outline"
        size="icon"
        className={`!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white ${Number(page) === Number(lastPage) ? "cursor-not-allowed" : ""}`}
        onClick={handleNextPage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      {notInTheLastPage && (
        <Button
          variant="outline"
          size="icon"
          className="!bg-white hover:!bg-blue-800 hover:opacity-60 hover:text-white"
          onClick={handleLastPage}
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
