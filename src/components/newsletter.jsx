import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#fef4f1] md:p-6'>
      {/* first div */}
           <div className='mx-5   '>

<h6 className='text-[#ff6e3d] font-medium text-[20px] pt-[50px] text-center md:text-[30px] '>NEWSLETTER</h6>
<h2 className='font-bold  text-[20px] mt-5 md:text-center md:text-[30px] text-center'>Subscribe Our Newsletter </h2>
<p className='text-[#989898] py-5 md:w-[600px] md:mx-auto mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus obcaecati necessitatibus cupiditate aspernatur hic rerum incidunt accusantium non ipsam?
</p>

{/* input */}
<div className='flex items-center  md:mx-auto  md:w-[600px]  h-[33px] w-[322px] rounded bg-white'>

  <input type="Email" placeholder='Email'  className='px-5 py-2 md:w-[500px]'/>
  <h6 className='h-[41px] md:w-[150px] md:font-bold md:p-2 w-[100px] bg-[#ff6e3d] text-white text-center font-semibold p-1 rounded-r'>Subscribe</h6>
</div>
</div>


    </div>
  )
}

export default Newsletter;
