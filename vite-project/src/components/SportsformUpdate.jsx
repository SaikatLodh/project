import React, { useContext, useEffect } from 'react'
import myContext from '../context/data/myContext';

const SportsformUpdate = () => {
    const context = useContext(myContext);
    const {sportsProducts,setSportsProducts,sportsupdateProduct} = context
  return (
    <div>
        <div>
        <div>
      <div className='w-full h-screen'>
<div className='flex justify-center items-center w-ful h-[100%]'>
  
    <div className='w-[500px]'>

     
<div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={sportsProducts.title} onChange={(e) => setSportsProducts({...sportsProducts,title: e.target.value})}/></div>
<div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3' value={sportsProducts.category} onChange={(e) => setSportsProducts({ ...sportsProducts, category: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3' value={sportsProducts.imageUrl} onChange={(e) => setSportsProducts({ ...sportsProducts, imageUrl: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={sportsProducts.imageUrlTwo} onChange={(e) => setSportsProducts({ ...sportsProducts, imageUrlTwo: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={sportsProducts.imageUrlThree} onChange={(e) => setSportsProducts({ ...sportsProducts, imageUrlThree: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={sportsProducts.imageUrlFour} onChange={(e) => setSportsProducts({ ...sportsProducts, imageUrlFour: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={sportsProducts.price}  onChange={(e) => setSportsProducts({ ...sportsProducts, price: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3'value={sportsProducts.description}  onChange={(e) => setSportsProducts({ ...sportsProducts, description: e.target.value })}/></div>

<div className='text-center'>

    <div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={sportsupdateProduct}>Send</button></div>

</div>
     



    </div>
</div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SportsformUpdate
