import React, { useContext } from 'react'
import myContext from '../context/data/myContext'

const BestsellingUpdateForm = () => {
    const context = useContext(myContext)
    const {bestSelling,setbestselling,updatebestselling} = context
  return (
    
    <div>
     
  
    <div>
       <div>
      <div className='w-full h-screen'>
<div className='flex justify-center items-center w-ful h-[100%]'>
  
    <div className='w-[500px]'>

     
<div className='pb-10'><input type="text" name="title" id="name" placeholder='Products Name' className=' border-b-2 border-black w-full pb-3' value={bestSelling.title} onChange={(e) => setbestselling({ ...bestSelling, title: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="category" id="name" placeholder='Category Name' className=' border-b-2 border-black w-full pb-3'  value={bestSelling.category} onChange={(e) => setbestselling({ ...bestSelling, category: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageurl" id="name" placeholder='Product Image' className=' border-b-2 border-black w-full pb-3'  value={bestSelling.imageUrl} onChange={(e) => setbestselling({ ...bestSelling, imageUrl: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlTwo" id="name" placeholder='Product Image Two' className=' border-b-2 border-black w-full pb-3' value={bestSelling.imageUrlTwo} onChange={(e) => setbestselling({ ...bestSelling, imageUrlTwo: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Three' className=' border-b-2 border-black w-full pb-3' value={bestSelling.imageUrlThree} onChange={(e) => setbestselling({ ...bestSelling, imageUrlThree: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="imageUrlThree" id="name" placeholder='Product Image Four' className=' border-b-2 border-black w-full pb-3' value={bestSelling.imageUrlFour} onChange={(e) => setbestselling({ ...bestSelling, imageUrlFour: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="price" id="name" placeholder='Product Price' className=' border-b-2 border-black w-full pb-3' value={bestSelling.price} onChange={(e) => setbestselling({ ...bestSelling, price: e.target.value })}/></div>
<div className='pb-10'><input type="text" name="description" id="name" placeholder='Products Details' className=' border-b-2 border-black w-full pb-3' value={bestSelling.description} onChange={(e) => setbestselling({ ...bestSelling, description: e.target.value })}/></div>

<div className='text-center'>

<div><button className='w-[200px] h-[40px] rounded-xl bg-[black] text-[white]' onClick={updatebestselling}>Send</button></div>

     

</div>

    </div>
</div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default BestsellingUpdateForm
