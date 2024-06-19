import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';

const WomenImageForm = () => {
    const context = useContext(myContext);
    const { womenImage,setwomenimge,addwomenimage} = context
  return (
    <div>
            <div>
                <div>
                    <div className='w-full h-screen'>
                        <div className='flex justify-center items-center w-ful h-[100%]'>

                            <div className='w-[500px]'>


                             
                                <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={womenImage.imageUrl} onChange={(e) => setwomenimge({ ...womenImage, imageUrl: e.target.value })} /></div>
                               
                                <div className='text-center'>

                                    <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={addwomenimage}>Send</button></div>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WomenImageForm
