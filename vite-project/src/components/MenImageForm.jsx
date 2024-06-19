import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';

const MenImageForm = () => {
  const context = useContext(myContext);
    const { menproduct,setMenProduct,addmenproduct } = context
  return (
    <div>
            <div>
                <div>
                    <div className='w-full h-screen'>
                        <div className='flex justify-center items-center w-ful h-[100%]'>

                            <div className='w-[500px]'>


                                <div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={menproduct.title} onChange={(e) => setMenProduct({ ...menproduct, title: e.target.value })} /></div>
                                <div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3' value={menproduct.category} onChange={(e) => setMenProduct({ ...menproduct, category: e.target.value })} /></div>
                                <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={menproduct.imageUrl} onChange={(e) => setMenProduct({ ...menproduct, imageUrl: e.target.value })} /></div>
                               <div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={menproduct.price} onChange={(e) => setMenProduct({ ...menproduct, price: e.target.value })} /></div>
                                <div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={menproduct.description} onChange={(e) => setMenProduct({ ...menproduct, description: e.target.value })} /></div>

                                <div className='text-center'>

                                    <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={addmenproduct}>Send</button></div>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MenImageForm

