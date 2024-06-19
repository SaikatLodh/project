import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';

const Kidsform = () => {
    const context = useContext(myContext);
    const { kidsImage,setkidsimge,addkidsimage} = context
  return (
    <div>
    <div>
        <div>
            <div className='w-full h-screen'>
                <div className='flex justify-center items-center w-ful h-[100%]'>

                    <div className='w-[500px]'>


                     
                        <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={kidsImage.imageUrl} onChange={(e) => setkidsimge({ ...kidsImage, imageUrl: e.target.value })} /></div>
                       
                        <div className='text-center'>

                            <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={addkidsimage}>Send</button></div>

                        </div>




                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Kidsform
