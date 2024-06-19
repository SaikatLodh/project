import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';

const Updatepuma = () => {
    const context = useContext(myContext);
    const { puma, setpuma, updatePuma } = context
  return (
    <div>
    <div>
        <div>
            <div className='w-full h-screen'>
                <div className='flex justify-center items-center w-ful h-[100%]'>

                    <div className='w-[500px]'>


                        <div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={puma.title} onChange={(e) => setpuma({ ...puma, title: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3' value={puma.category} onChange={(e) => setpuma({ ...puma, category: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={puma.imageUrl} onChange={(e) => setpuma({ ...puma, imageUrl: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={puma.imageUrlTwo} onChange={(e) => setpuma({ ...puma, imageUrlTwo: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={puma.imageUrlThree} onChange={(e) => setpuma({ ...puma, imageUrlThree: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={puma.imageUrlFour} onChange={(e) => setpuma({ ...puma, imageUrlFour: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={puma.price} onChange={(e) => setpuma({ ...puma, price: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={puma.description} onChange={(e) => setpuma({ ...puma, description: e.target.value })} /></div>

                        <div className='text-center'>

                            <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={updatePuma}>Send</button></div>

                        </div>




                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Updatepuma
