import React from 'react'

export default function Menu({text,Icon,active}) {
  return (
    <div className="flex items-center hoverEfect">
       <span> {Icon}</span>
       <span className={`${active && "font-bold"} hidden md:inline`}>{text}</span>
    </div>
  )
}
