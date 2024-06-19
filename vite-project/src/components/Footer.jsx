import React from 'react'
import img from '../../src/assets/adidas.png'
import img2 from '../../src/assets/nike.png'
import img3 from '../../src/assets/puma.png'
import logo from '../../src/assets/logo.jpg'
import { useDispatch, useSelector } from 'react-redux'

const Footer = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      {user ? <>
        <div data-scroll-section>
      <div>
        <div className='w-full bg-[#c2ab7f8e] text-center'>
          <div className='pt-[60px] flex items-center justify-center gap-5'>
            <div><img src={img} alt="" /></div>
            <div><img src={img2} alt="" /></div>
            <div><img src={img3} alt="" /></div>
          </div>

          <div>
            <div className='w-[775px] m-auto mt-[150px] mb-[90px]'>
              <div className='flex justify-between'>
                <div>
                  <div className='text-[20px] text-[black] font-semibold'><h6>Collection</h6></div>
                  <ul>
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Sports</a>
                    </li>

                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Sneakers</a>
                    </li>

                    
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Casua</a>
                    </li>

                    
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Canvas</a>
                    </li>

                    
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>HipHop</a>
                    </li>
                  </ul>
                </div>
                <div>
                <div className='text-[20px] text-[black] font-semibold'><h6>Shop</h6></div>
                  <ul>
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Men</a>
                    </li>

                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Women</a>
                    </li>

                    
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Kids</a>
                    </li>

                   
                  </ul>
                </div>
                <div>

                <div className='text-[20px] text-[black] font-semibold'><h6>INFORMATION</h6></div>
                  <ul>
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>About Us</a>
                    </li>

                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Delivery Information</a>
                    </li>

                    
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Contact Us</a>
                    </li>

                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Site Map</a>
                    </li>

                   
                  </ul>
                </div>
                <div>
                <div className='text-[20px] text-[black] font-semibold'><h6>Social</h6></div>
                  <ul>
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Facebook</a>
                    </li>

                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>YouTube</a>
                    </li>

                    
                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Instagram</a>
                    </li>

                    <li className='pt-[10px]'>
                      <a href="" className='text-[16px]'>Twitter</a>
                    </li>

                   
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex items-center justify-center flex-col'>
              <div><img src={logo} alt="" /></div>
              <div className='py-[40px] pb-[50px]'><p className='text-[20px] font-semibold'>Powered By DC Your Store © 2024</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      </> : <>
      <div></div>
      
      </>}
    </div>
   
  )
}

export default Footer
