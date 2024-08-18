import React from 'react'

const Button = ({height,width, text = 'Click'}) => {
  return (
    <>
        <button style={{ width:`${width}`, height:`${height}` }} className='font-montserrat border border-solid border-black rounded-md bg-black text-[#DCE0D9] hover:text-black hover:font-semibold hover:bg-[#f6faf3] py-2 duration-300' >
            {text}
        </button>
    </>
  )
}

export default Button