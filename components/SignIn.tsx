"use client"
import Image from 'next/image'
import {signIn} from "next-auth/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {FormEvent, useState} from "react"
import {toast} from "react-hot-toast"
import axios from "axios"
import { hash } from 'bcryptjs'
import { redirect } from 'next/dist/server/api-utils'
type SignInPropsType ={
    togglePopUp: () => void,
    alreadyHaveAccount: Boolean,
    toggleAccountState: () => void,
}
export default function SignIn({togglePopUp,alreadyHaveAccount,toggleAccountState} : SignInPropsType) {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // Sign In login
        if(alreadyHaveAccount == true){
            const res = await signIn("credentials", {
                Email: credentials.email,
                Password: credentials.password,
                redirect: false 
            })
            .then(callback =>{ 
                if(callback?.error) {
                    toast.error(callback.error)
                };
                if(callback?.ok && !callback?.error){
                    toast.success("Connected succefully");
                    togglePopUp();
                }
            })
        }else{
            // Create new account login

            // test the Email validation
            const pattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/img
            if(!pattern.test(credentials.email)){
                toast.error("Email is not valid,Try another one");
                return
            }

            try {
                const response = await fetch("/api/signUp", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                });
               
                if (response.ok) {
                  toast.success("User registered successfully");
                  setCredentials({email:"",password:""});
                  toggleAccountState()
                } else {
                    // Handle the error response from the API
                  const errorResponse = await response.json();
                  toast.error(errorResponse.error);
                }
              } catch (error) {
                // Handle any other unexpected errors
                toast.error("An error occurred while registering, Try again");
              }

        }
    }
    function handleGoogleAuth(){
        signIn('google',{redirect:false})
    }
  return (
    <div 
        className='h-full w-full flex justify-center items-center bg-black bg-opacity-50   fixed left-0 right-0 bottom-0 top-0 z-50'
        onClick={togglePopUp}
    >
        <div 
            className='absolute ml-auto sm:max-w-[25rem] w-full max-sm:justify-center  max-sm:h-full bg-white flex flex-col items-center py-8 px-[2rem] sm:px-[3rem] sm:rounded-md'
            onClick={(e)=>e.stopPropagation()}        
        >
            <button 
                className=' absolute top-0 right-0 m-4 text-2xl'
                onClick={togglePopUp}
            ><FontAwesomeIcon icon={faXmark} /></button>
            <h2 className='font-roboto font-semibold text-3xl text-center py-8 '>
                {alreadyHaveAccount===true ? "Sign In" : "Create new account"}
                
            </h2>
            <button 
                className='border border-gray-300 hover:bg-gray-50 rounded-md font-rubik font-medium text-[1rem] min-w-0 w-full flex items-center px-4 py-2 '
                onClick={handleGoogleAuth}    
            >
                <Image src="/assets/google-icon.png" width="20" height="20" alt="google icon"/>
                <span className=' whitespace-nowrap  w-full text-center'>Continue with Google</span>
            </button>
            <div className='flex items-center  w-full py-8'>
                <span className='w-full border-b '></span> 
                <span className="font-semibold px-4">or</span>
                <span className='w-full border-b '></span>
            </div>
            <form action="" className='flex flex-col gap-y-3 w-full'>
                <input 
                    autoFocus
                    type="text"
                    placeholder='Email'
                    className="border border-gray-300 rounded-sm w-full px-3 py-2  " 
                    value={credentials.email}
                    onChange={(e)=>{setCredentials({ ...credentials , email: e.target.value})}}
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    className="border border-gray-300 rounded-sm w-full px-3 py-2 " 
                    value={credentials.password}
                    onChange={(e)=>{setCredentials({ ...credentials , password: e.target.value})}}
                />
                <button 
                    className='bg-blue-800 text-white w-full py-1 rounded-md font-semibold hover:bg-blue-900 border border-red-800'
                    onClick={handleSubmit}
                >
                    {alreadyHaveAccount===false ? "Sign Up" : "Sign In"}
                </button>
            </form>
            <div className='text-[.9rem] text-gray-500 pt-4'>
                {alreadyHaveAccount===false ? "Already have an account? " : "Don't have an account? "}
                
                <button 
                    className='underline text-black '
                    onClick={()=>{setCredentials({email:"",password:""});toggleAccountState()}}
                >
                    {alreadyHaveAccount===false ? "Sign In" : "Join Us"}
                </button>
            </div>
        </div>
    </div>
  )
}
