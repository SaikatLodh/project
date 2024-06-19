import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';


const Updateadidas = () => {
    const context = useContext(myContext);
    const { adidas, setadidas, updateadidas } = context
  return (
    <div>
    <div>
        <div>
            <div className='w-full h-screen'>
                <div className='flex justify-center items-center w-ful h-[100%]'>

                    <div className='w-[500px]'>


                        <div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={adidas.title} onChange={(e) => setadidas({ ...adidas, title: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3' value={adidas.category} onChange={(e) => setadidas({ ...adidas, category: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={adidas.imageUrl} onChange={(e) => setadidas({ ...adidas, imageUrl: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={adidas.imageUrlTwo} onChange={(e) => setadidas({ ...adidas, imageUrlTwo: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={adidas.imageUrlThree} onChange={(e) => setadidas({ ...adidas, imageUrlThree: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={adidas.imageUrlFour} onChange={(e) => setadidas({ ...adidas, imageUrlFour: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={adidas.price} onChange={(e) => setadidas({ ...adidas, price: e.target.value })} /></div>
                        <div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={adidas.description} onChange={(e) => setadidas({ ...adidas, description: e.target.value })} /></div>

                        <div className='text-center'>

                            <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={updateadidas}>Send</button></div>

                        </div>




                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Updateadidas
