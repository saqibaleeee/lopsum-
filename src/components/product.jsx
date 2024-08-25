import React from 'react'

const Product = () => {
  return (
    <div className='md:flex md:justify-center md:items-center gap-10'>
        <div className=' mt-5 mx-5'>
          <img src="/watch.png" alt="" />
        </div>


        <div className=' md:m-[100px]'>

            <h6 className='Nunitro Sans text-[#ff6e3d] md:text-[25px] md:leading-[20px] text-[15px] font-bold leading-4 my-5 text-center md:text-start' >ABOUT THE PRODUCT</h6>

            <h1 className='poppins md:py-[15px] md:font-bold md:text-[30px] md:leading-[40px] md:w-[262px]    font-bold text-[20px] leading-[30px]   text-center md:text-left'>Awesome Digital Watch Can Make Your Life Easier</h1>

            <p className='poppins md:font-normal text-[#979797] md:w-[390px] text-center md:text-left  py-5'>High technology for your Watches Intl shipping Wide selection of winders. Worldwide Shipping. Luxury European Products. Paypal. UPS Express Delivery. Secured Payment. Highlights: Catalog Available, Serving Since 2009</p>


         <main className='md:flex md:items-center md:gap-[162px] md:my-10  flex items-center justify-between mx-5 '>
            <div>
            <div className='flex gap-5 items-center'>
                 <i className='bx bx-check text-[#ff6e3d] text-3xl' >  </i>
            <p>lorem ipsum</p>
            </div>

            <div className='flex gap-5 items-center'>
                 <i className='bx bx-check text-[#ff6e3d] text-3xl' >  </i>
            <p>lorem ipsum</p>
            </div>

            <div className='flex gap-5 items-center'>
                 <i className='bx bx-check text-[#ff6e3d] text-3xl' >  </i>
            <p>lorem ipsum</p>
            </div>
            </div>
            <div>
            <div className='flex gap-5 items-center'>
                 <i className='bx bx-check text-[#ff6e3d] text-3xl' >  </i>
            <p>lorem ipsum</p>
            </div>

            <div className='flex gap-5 items-center'>
                 <i className='bx bx-check text-[#ff6e3d] text-3xl' >  </i>
            <p>lorem ipsum</p>
            </div>

            <div className='flex gap-5 items-center'>
                 <i className='bx bx-check text-[#ff6e3d] text-3xl' >  </i>
            <p>lorem ipsum</p>
            </div>
            </div>
        

         </main>
            <button className='bg-[#ff6e3d] md:px-8 md:py-3 md:rounded-[4px] font-bold text-white md:text-[18px]  rounded-[4px] items-center mx-auto block px-5 py-3 m-5 '>Read More</button>

        </div>
      
    </div>
  )
}

export default Product;
