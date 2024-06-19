import React, { useContext } from 'react'
import myContext from '../context/data/myContext'

const WomenProductForm = () => {
   const context = useContext(myContext)
   const { womenproduct, setwoMenProduct, addwomenproduct } = context
   return (

      <div>
         <div>
            <div>
               <div>
                  <div className='w-full h-screen'>
                     <div className='flex justify-center items-center w-ful h-[100%]'>

                        <div className='w-[500px]'>


                           <div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={womenproduct.title} onChange={(e) => setwoMenProduct({ ...womenproduct, title: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3' value={womenproduct.category} onChange={(e) => setwoMenProduct({ ...womenproduct, category: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={womenproduct.imageUrl} onChange={(e) => setwoMenProduct({ ...womenproduct, imageUrl: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={womenproduct.imageUrlTwo} onChange={(e) => setwoMenProduct({ ...womenproduct, imageUrlTwo: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={womenproduct.imageUrlThree} onChange={(e) => setwoMenProduct({ ...womenproduct, imageUrlThree: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={womenproduct.imageUrlFour} onChange={(e) => setwoMenProduct({ ...womenproduct, imageUrlFour: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={womenproduct.price} onChange={(e) => setwoMenProduct({ ...womenproduct, price: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={womenproduct.description} onChange={(e) => setwoMenProduct({ ...womenproduct, description: e.target.value })} /></div>

                           <div className='text-center'>

                              <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={addwomenproduct}>Send</button></div>



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

export default WomenProductForm
