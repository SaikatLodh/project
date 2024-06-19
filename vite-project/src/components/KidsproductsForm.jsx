import React, { useContext } from 'react'
import myContext from '../context/data/myContext'

const KidsproductsForm = () => {
    const context = useContext(myContext)
    const {kidsproduct,setkidsProduct,addkidsproduct} = context
  return (
    <div>
    <div>
   <div>
      <div>
     <div className='w-full h-screen'>
<div className='flex justify-center items-center w-ful h-[100%]'>
 
   <div className='w-[500px]'>

    
<div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={kidsproduct.title} onChange={(e) => setkidsProduct({ ...kidsproduct, title: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3'  value={kidsproduct.category} onChange={(e) => setkidsProduct({ ...kidsproduct, category: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3'  value={kidsproduct.imageUrl} onChange={(e) => setkidsProduct({ ...kidsproduct, imageUrl: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={kidsproduct.imageUrlTwo} onChange={(e) => setkidsProduct({ ...kidsproduct, imageUrlTwo: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={kidsproduct.imageUrlThree} onChange={(e) => setkidsProduct({ ...kidsproduct, imageUrlThree: e.target.value })} /></div>
                           <div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={kidsproduct.imageUrlFour} onChange={(e) => setkidsProduct({ ...kidsproduct, imageUrlFour: e.target.value })} /></div>
<div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={kidsproduct.price} onChange={(e) => setkidsProduct({ ...kidsproduct, price: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={kidsproduct.description} onChange={(e) => setkidsProduct({ ...kidsproduct, description: e.target.value })}/></div>

<div className='text-center'>

<div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={addkidsproduct}>Send</button></div>

    

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

export default KidsproductsForm
