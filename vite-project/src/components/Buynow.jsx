import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';


const Buynow = ({name,address,pincode,phoneNumber,setname,setaddress,setpincode,setphonenumber,buynow}) => {
    // const context = useContext(myContext);
    // const { name,address,pincode,phoneNumber,setname,setAddress,setPincode,setPhoneNumber,buynow} = context
    return (
        <div>
            <div className='w-full h-screen flex items-center justify-center'>
                
                <div>
                <div>
            <div>
                <div>
                    <div className='w-full h-screen'>
                        <div className='flex justify-center items-center w-ful h-[100%]'>

                            <div className='w-[500px]'>


                                <div className='pb-10'><input type="text" name="name" id="name" placeholder='Name' className=' border-b-2 border-black w-full pb-3' value={name} onChange={(e) => setname(e.target.value )} /></div>
                                <div className='pb-10'><input type="text" name="address" id="address" placeholder='Address' className=' border-b-2 border-black w-full pb-3' value={address} onChange={(e) => setaddress( e.target.value )} /></div>
                                <div className='pb-10'><input type="text" name="pincode" id="pincode" placeholder='Pincode' className=' border-b-2 border-black w-full pb-3' value={pincode} onChange={(e) => setpincode( e.target.value )} /></div>
                                <div className='pb-10'><input type="text" name="phonenumber" id="phonenumber" placeholder='Phone Number' className=' border-b-2 border-black w-full pb-3' value={phoneNumber} onChange={(e) => setphonenumber( e.target.value )} /></div>
                                {/* <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={bestSelling.imageUrlThree} onChange={(e) => setbestselling({ ...bestSelling, imageUrlThree: e.target.value })} /></div>
                                <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={bestSelling.imageUrlFour} onChange={(e) => setbestselling({ ...bestSelling, imageUrlFour: e.target.value })} /></div>
                                <div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={bestSelling.price} onChange={(e) => setbestselling({ ...bestSelling, price: e.target.value })} /></div>
                                <div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={bestSelling.description} onChange={(e) => setbestselling({ ...bestSelling, description: e.target.value })} /></div> */}

                                <div className='text-center'>

                                    <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={()=>{buynow()}}>Send</button></div>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    )
}

export default Buynow
