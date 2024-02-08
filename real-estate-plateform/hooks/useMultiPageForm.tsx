"use client"
import { useState } from "react";
import { z } from "zod";

export  function useMultiPageForm(NumberOfPages: number){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    function next(){
        setCurrentStepIndex(prev=>{
            if(prev === NumberOfPages - 1) return prev
            return prev + 1
        })
    }
    function back(){
        setCurrentStepIndex(prev=>{
            if(prev <= 0 ) return prev
            return prev - 1
        })
    }

    return ({
        next,
        back,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === NumberOfPages - 1,
        currentStepIndex // from 0 => currentIndex -1
    })
}