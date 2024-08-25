import React from 'react'

const Footer = () => {
  return (
    <div >
        <div className='text-2xl font-bold mx-auto text-center py-10'>
        Footer
    </div>
    <div className='md:flex md:justify-center md:gap-[200px]'>
        <div>
       <div className='font-semibold'>contact</div>
       <ul>
        <li className='leading-10'>Email</li>
        <li className='leading-10'>phone</li>
        <li className='leading-10'>adress</li>
       </ul>
       </div>

       <div>
       <div className='font-semibold'>Group</div>
       <ul>
        <li className='leading-10'>Email</li>
        <li className='leading-10'>phone</li>
        <li className='leading-10'>adress</li>
       </ul>
       </div>

       <div>
       <div className='font-semibold'>Partner</div>
       <ul>
        <li className='leading-10'>Email</li>
        <li className='leading-10'>phone</li>
        <li className='leading-10'>adress</li>
       </ul>
       </div>
       </div>
       
    </div>
  )
}

export default Footer;
