import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';

const Bannersliderimageupdateform = () => {
    const context = useContext(myContext);
    const { banner,setbanner,updatebanner } = context
  return (
    <div>
            <div>
                <div>
                    <div className='w-full h-screen'>
                        <div className='flex justify-center items-center w-ful h-[100%]'>

                            <div className='w-[500px]'>


                                <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={banner.imageUrl} onChange={(e) => setbanner({ ...banner, imageUrl: e.target.value })} /></div>
                              
                                <div className='text-center'>

                                    <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={updatebanner}>Send</button></div>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Bannersliderimageupdateform
