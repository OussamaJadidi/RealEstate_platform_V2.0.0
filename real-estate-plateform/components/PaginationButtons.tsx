"use client"
import {
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function PaginationButtons() {
  const router = useRouter()
  const params = new URLSearchParams;
  const page = params.get('page') ?? 1;
  console.log(page)
  function handleFirstPage(){
    params.set('page','5')
    router.push(`/properties?${params.toString()}`)
  }
  function handlePreviousPage(){
    const previousPageNumber = Number(page) - 1;
    params.append('page',previousPageNumber.toString())
    router.push(`/properties?${params.toString()}`)
  }
  function handleNextPage(){
    const previousPageNumber = Number(page) + 1;
    params.append('page',previousPageNumber.toString())
    router.push(`/properties?${params.toString()}`)
  }
  function handleLastPage(){
    params.append('page','555')
    router.push(`/properties?${params.toString()}`)
  } 
  return (
    <div className="flex gap-1 w-full justify-center py-[3rem] ">
      <Button
        variant="outline"
        size="icon"
        className=" hover:bg-blue-800 hover:opacity-60 hover:text-white bg-red-800"
        onClick={handleFirstPage}
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className=" hover:bg-blue-800 hover:opacity-60 hover:text-white"
        onClick={handlePreviousPage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className=" bg-blue-800 text-white hover:bg-blue-800 hover:opacity-60 hover:text-white"
      >
        1
      </Button>
      <Button
        variant="outline"
        size="icon"
        className=" hover:bg-blue-800 hover:opacity-60 hover:text-white"
      >
        2
      </Button>
      <Button
        variant="outline"
        size="icon"
        className=" hover:bg-blue-800 hover:opacity-60 hover:text-white"
      >
        3
      </Button>

      <Button
        variant="outline"
        size="icon"
        className=" hover:bg-blue-800 hover:opacity-60 hover:text-white"
        onClick={handleNextPage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className=" hover:bg-blue-800 hover:opacity-60 hover:text-white"
        onClick={handleLastPage}
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
