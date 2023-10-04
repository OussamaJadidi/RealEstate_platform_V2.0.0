"use client"

import { useState } from "react"

export default function useHandlePopUp(popUpTrigger: HTMLElement,popUp: HTMLElement ) {
 const [isOpen, setIsOpen] = useState(false)
    function handleClick(e: MouseEvent){
        setIsOpen(state => !state)
    }
    
  return (
    [
        isOpen,
        handleClick
    ]
  )
}
