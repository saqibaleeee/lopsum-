import React from 'react'

const Testimonial = () => {
  return (
    <div>
       <div className='mx-5   '>

<h6 className='text-[#ff6e3d] font-medium text-[20px] pt-[50px] text-center md:text-[30px] '>TESTIMONIALS</h6>
<h2 className='font-bold  text-[20px] mt-5 md:text-center md:text-[30px] text-center'> Our Custumer Feedback </h2>
<p className='text-[#989898] py-5 md:w-[500px] md:mx-auto mx-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas doloribus obcaecati necessitatibus cupiditate aspernatur hic rerum incidunt accusantium non ipsam?
</p>
</div>

<div className='md:flex md:items-center md:gap-10 md:mx-[100px]'>

<div className=' border border-black mx-5 my-5 py-5 rounded hover:border-[#ff6e3d] hover:border md:p-5 '>
    <div className='flex justify-between px-2 '>
        
        <div className='flex gap-3'>
            <img src="/man.png" alt=""  className='w-[51px] h-[51px]'/>
        <div>
        <h1  className='font-bold'>Viezh Robert</h1>
        <span>poland</span>
        </div>
        </div>
        <div>
            4.5
            <i className='box box-star'></i>
        </div>
      
    </div>
    <p className='py-2 px-2  md:w-[500px] '>" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, porro?"</p>
</div>

<div className=' border border-black mx-5 my-5 py-5 rounded hover:border-[#ff6e3d] hover:border md:p-5 '>
    <div className='flex justify-between px-2 '>
        
        <div className='flex gap-3'>
        <img src="/man.png" alt=""  className='w-[51px] h-[51px]'/>
           
        <div><h1  className='font-bold'>Viezh Robert</h1>
        <span>poland</span>
        </div>
        </div>
        <div>
            4.5
            <i className='box box-star'></i>
        </div>
      
    </div>
    <p className='py-2 px-2  md:w-[500px]'>" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, porro?"</p>
</div>



</div>
    </div>
  )
}

export default Testimonial;
