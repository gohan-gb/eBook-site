import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#808f85] font-montserrat py-4'>
      <footer className='mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-32 py-4 flex flex-col sm:flex-row sm:justify-between'>
        <section>
            <h1>
              Join Us Now On
            </h1>
            <ul className='flex-col my-2'>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
        </section>


        <section>
          <h1 className=''>
            Get Regular Updates  
          </h1>  
          <div className='my-2'>
          <input className='rounded-sm p-2 mb-2' type="email" placeholder='enter email and submit' />
          <input className='bg-black text-white w-20 rounded-sm p-2' type="submit"  />
          </div>
        </section>


        <section>
          <h1>Useful Links</h1>
          <ul className='my-2'>
            <li>Contact</li>
            <li>About Us</li>
            <li>Policies</li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

export default Footer