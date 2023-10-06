import React from 'react'

type ContainerProps={
    children: React.ReactNode,
    className?: string
}
export default function Container({children,className}: ContainerProps) {
  return (
    <div className={`max-w-[1350px]  m-auto ${className}`}>
        {children}
    </div>
  )
}
