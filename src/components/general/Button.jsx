import React from 'react'

export default function Button({ text, className }) {
  return (
    <div className={`inline px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white ${className}`}>
      {text}
    </div>
  )
}
