import React, { useContext } from 'react'
import men from '../../src/assets/men.jpg'
import MyContext from '../context/data/myContext'



const Whatareyoufor = () => {
  const context = useContext(MyContext)
  const {getbannerImage,getwomenbannerImage,getkidsImage} = context
  // const {imageUrl,time} = getbannerImage
  // console.log(time)
  return (
    <div data-scroll-section>
      <div  className='text-center mt-[100px]'>
        <div><h2 className='text-[50px] text-[black]'>Who are you shopping for?</h2></div>

        <div className='flex items-center justify-between w-[936px] m-auto mt-[100px]'> 
            <div>
                <div><h6 className='text-[20px] text-[black]'>Men</h6></div>
                <div className='pt-5'>
                    <img src={men} alt="" className='w-[180px] h-[180px] rounded-full object-contain'/>
                </div>
            </div>

            <div>
                <div><h6 className='text-[20px] text-[black]'>Women</h6></div>
                <div className='pt-5'>
                    <img src={men} alt="" className='w-[180px] h-[180px] rounded-full object-cover'/>
                </div>
            </div>

            <div>
                <div><h6 className='text-[20px] text-[black]'>Kids</h6></div>
                <div className='pt-5'>
                    <img src={men} alt="" className='w-[180px] h-[180px] rounded-full'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Whatareyoufor
