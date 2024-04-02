import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <div>    
    <button onClick={onClick} className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black group-hover:text-white">{children}</span>
  </button>
    </div>
  )
}

export default Button
