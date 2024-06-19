import React, { useContext } from 'react'
import myContext from '../context/data/myContext'


const UpDateProducts = () => {
    const context = useContext(myContext)
    const {products,setProducts,updateProduct} = context
  return (
    <div>
       <div>
      <div className='w-full h-screen'>
<div className='flex justify-center items-center w-ful h-[100%]'>
  
    <div className='w-[500px]'>

     
    <div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={products.title} onChange={(e) => setProducts({ ...products, title: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3'  value={products.category} onChange={(e) => setProducts({ ...products, category: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3'  value={products.imageUrl} onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={products.imageUrlTwo} onChange={(e) => setProducts({ ...products, imageUrlTwo: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={products.imageUrlThree} onChange={(e) => setProducts({ ...products, imageUrlThree: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={products.imageUrlFour} onChange={(e) => setProducts({ ...products, imageUrlFour: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={products.price} onChange={(e) => setProducts({ ...products, price: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={products.description} onChange={(e) => setProducts({ ...products, description: e.target.value })}/></div>

<div className='text-center'>

    <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={updateProduct}>Send</button></div>

     

</div>

    </div>
</div>
      </div>
    </div>
    </div>
  )
}

export default UpDateProducts
