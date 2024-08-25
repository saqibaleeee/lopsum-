import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#fde1d3] mt-[25px] home'>

        <div className='md:grid md:grid-cols-2 md:gap-[112px]'>
         <div className='md:mt-[50px]  '>
              <h6 className=' text-center  md:font-bold md:text-[25px] md:leading-[34px] text-[#ff6e3d] pt-4    '>30% OFF FOR LIMITED TIME</h6>

                <h1 className=' md:ml-[100px] md:font-extrabold md:text-[50px] md:leading-[83px] md:mt-[30px] font-[poppins]  text-center my-4 '>Best Fashionable </h1>
                <div className='md:ml-[15px]  md:font-extrabold md:text-[50px] md:leading-[83px]  font-[poppins]  text-center my-4'>Digital Watch.</div>

                <p className=' md:ml-[180px]  md:w-[553px] md:font-normal md:text-[20px] md:leading-[27px] md:mt-[15px] text-[#989898] my-4 text-center '>Find Quality Products from Verified Suppliers. Get a Live Quote Now! Trade Assurance. Most Popular. Production Monitoring. Logistics Service. Types: Apparel, Tools & Hardware, Home Appliance, Consumer Electronics, Jewelry.</p>

                <button className=' rounded-[4px] bg-[#ff6e3d] px-8 py-3 font-[poppins]  text-white  mx-auto block my-8 font-semibold  md:mt-[70px]'>shop now</button>
            
         </div>
         <div className='mx-5'>
            <img  className='md:mt-[200px] mt-[50px] ' src="/fossil.png" alt="" />
         </div>



        </div>


      
    </div>
  )
}

export default Home;
