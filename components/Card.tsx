import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div className='border block border-black w-[25rem] h-[20rem] rounded-lg overflow-hidden'>
        <Image src="/assets/c.jpg" alt="propertyImg" width="500" height="300" className='h-[15rem] ' />
        p1
    </div>
    
  )
}
