import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]  = useState(false)
  return (
    <>
     <div className='md:mx-[100px] mx-[20px] md:pt-[20px]   flex items-center justify-between md:flex md:justify-between  md:items-center '>
        <h1 className='font-bold  leading-[18px] md:leading-[37px] text-[20px] md:text-[32px] text-[#f99878]    '>Logo Ipusm</h1>
        <ul className='md:flex gap-9 hidden cursor-pointer'>
            <li className='font-semibold leading-[21px] text-[18px] text-[#646464]'><Link to="/">Home</Link>  </li>
            <li  className='font-semibold leading-[21px] text-[18px] text-[#646464]'> <Link to="/feature">Features</Link></li>
            <li className='font-semibold leading-[21px] text-[18px] text-[#646464]'><Link to="/video">Reviews</Link> </li>
            <li className='font-semibold leading-[21px] text-[18px] text-[#646464]'><Link to="/product">Product</Link> </li>
            <li className='font-semibold leading-[21px] text-[18px] text-[#646464]'><Link to="/frequent">Faqs</Link></li>
            <li className='font-semibold leading-[21px] text-[18px] text-[#646464]'> <Link to="">Contact</Link></li>
        </ul>

       <div className='rounded-[4px] bg-[#f99878] hidden md:block'>  <button className='font-bold md:text-[18px] md:px-[30px] px-[15px] md:py-[10px] py-[5px] text-white font-[poppins]'>shop now</button></div>
      
       <i  className='bx bx-menu text-5xl cursor-pointer  md:hidden block  ' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      
     <div className={`absolute  xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-5 font-semibold   text-lg  ${isMenuOpen ? "opacity-100" :"opacity-0"}`}>
      <li className='list-none w-full text-center p-4'>home</li>
      <li className='list-none w-full text-center p-4'>features</li>
      <li className='list-none w-full text-center p-4'>reviews</li>
      <li className='list-none w-full text-center p-4'>product</li>
      <li className='list-none w-full text-center p-4'>faq</li>
      <li className='list-none w-full text-center p-4'>contact</li>
     </div>
     </div>
    </>
  )
}

export default Header;
