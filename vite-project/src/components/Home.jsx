import React from 'react'
import Banner from './Banner'
import NewArivels from './NewArivels'
import SportsShoes from './SportsShoes'
import Whatareyoufor from './Whatareyoufor'
import BestSelling from './BestSelling'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/cartSlice'




const Home = () => {

  


  return (
    <div>

      <div>
        <Banner />
        <NewArivels />
        <SportsShoes />
        <Whatareyoufor />
        <BestSelling />

     
      </div>
    </div>
  )
}

export default Home
