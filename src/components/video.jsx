import React from 'react'

const Video = () => {
  return (
    <div>

      <div className='mx-5   '>

        <h6 className='text-[#ff6e3d] font-medium text-[20px] pt-[50px] text-center md:text-[30px] '>PRODUCT DEMO </h6>
      <h2 className='font-bold text-center   text-[20px] mt-5 md:text-center md:text-[30px]'> Get Product  More Information </h2>
      <h5 className='text-center font-bold  text-[20px] md:text-[30px] '>From The Video</h5>
      <p className='text-[#989898] py-5 md:w-[500px] md:mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus obcaecati necessitatibus cupiditate aspernatur hic rerum incidunt accusantium non ipsam?
      </p>
        </div>
          {/* div ha ya img lag an aha */}
        <div>
         
        <div className=' h-[150px] bg-[#808080] mx-4 rounded-[10px] my-5 md:mx-auto md:w-[700px] md:h-[300px] flex items-center gap-10 px-5 '>
           <div>
             <h1 className='font-bold text-[15px] md:text-[40px] '>Best Fsahionable</h1>
           <h6 className='text-[#ff6e3d] font-bold text-[15px] md:text-[40px]  '>Digital Watch</h6>
           </div>
          <img className='h-[100px] w-[100px]  md:h-[300px] md:w-[300px]' src="/watch1 (1).png" alt="" />

        </div>

        </div>


    </div>
  )
}

export default Video;
