import React from 'react'

const Heading = ({span, frontText, backText}) => {
  return (
    <div className='font-lora text-2xl text-center sm:text-justify'>
        {frontText} <span className='font-bold text-[#6B0F1A]'>{span}</span> {backText}
    </div>
  )
}

export default Heading