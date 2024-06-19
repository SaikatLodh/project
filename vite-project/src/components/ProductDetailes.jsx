import React, { useContext, useEffect, useState } from 'react'
import SimilarItems from './SimilarItems'
import MyContext from '../context/data/myContext'
import { useParams } from 'react-router';
import { doc, getDoc } from 'firebase/firestore';
import { fireDB } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/Wishlist';






const ProductDetailes = () => {
  // const context = useContext(MyContext)
  // const { productdetailes } = context
  // console.log(productdetailes)

  const context = useContext(MyContext)
  const {getpuma} = context
  const [products, setProducts] = useState('')
  const [selling, setselling] = useState('')
  const [sports, setsports] = useState('')
  const [men, setmen] = useState('')
  const [women, setwomen] = useState('')
  const [kids, setids] = useState('')
  const [puma, setpuma] = useState('')
  const [adidas, setadidas] = useState('')
  const [nike, setnike] = useState('')
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const wishlistItems = useSelector((state) => state.wishlist)

  const addCart = (product) => {
    dispatch(addToCart(product))
  }

  const wishlistCart = (product) => {
    dispatch(addToWishlist(product));
  }

  useEffect(() => {
    localStorage.setItem('cart',JSON.stringify(cartItems))
  },[cartItems])

  useEffect(() => {
    localStorage.setItem('wishlist',JSON.stringify(wishlistItems))
  },[wishlistItems])


  // console.log(kids)
  // console.log(sports)
  // const {imageUrl,title,price,description} = products
  // const {imageUrl,title,price,description} = selling
  // console.log(products)
  const params = useParams()
  // console.log(products.title)

  const getProductData = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id))
      // console.log(productTemp)
      setProducts(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }


  useEffect(() => {
    getProductData()

  }, [])



  const getsellingData = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "bestselling", params.id))
      // console.log(productTemp)
      setselling(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getsellingData()
  }, [])


  const getsportsData = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "sportsproducts", params.id))
      // console.log(productTemp)
      setsports(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {

    getsportsData()

  }, [])




  const getmenData = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "menproduct", params.id))
      // console.log(productTemp)
      setmen(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {

    getmenData()

  }, [])


  const getwomenData = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "womenproduct", params.id))
      // console.log(productTemp)
      setwomen(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {

    getwomenData()

  }, [])



  const getkidsData = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "kidsproduct", params.id))
      // console.log(productTemp)
      setids(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {

    getkidsData()

  }, [])



  const pumaData = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "puma", params.id))
      // console.log(productTemp)
      setpuma(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {

    pumaData()

  }, [])




  
  const adidasdata = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "adidas", params.id))
      // console.log(productTemp)
      setadidas(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {

    adidasdata()

  }, [])




  const nikedata = async () => {

    try {
      const productTemp = await getDoc(doc(fireDB, "nike", params.id))
      // console.log(productTemp)
      setnike(productTemp.data());
      // console.log(productTemp.data())

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {

    nikedata()

  }, [])





  return (
    <div className='pt-[10vw]  px-10 pb-[100px]'>
      {products &&
        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={products.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={products.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={products.imageUrlThree} alt="" />
              </div>
              <div>
                <img src={products.imageUrlFour} alt="" />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{products.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{products.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{products.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]' onClick={() => addCart(products)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]' onClick={()=> wishlistCart(products)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>

      }


      {selling &&

        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={selling.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={selling.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={selling.imageUrlThree} alt="" />
              </div>
              <div>
                <img src={selling.imageUrlFour} alt="" />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{selling.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{selling.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{selling.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]' onClick={() => addCart(selling)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]' onClick={() => wishlistCart(selling)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>

      }

      {
        sports && <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={sports.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={sports.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={sports.imageUrlThree} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
              <div>
                <img src={sports.imageUrlFour} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{sports.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{sports.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{sports.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]' onClick={() => addCart(sports)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]' onClick={() => wishlistCart(sports)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>
      }

      {
        men &&
        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={men.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={men.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={men.imageUrlThree} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
              <div>
                <img src={men.imageUrlFour} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{men.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{men.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{men.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]' onClick={() => addCart(men)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]'onClick={() => wishlistCart(men)} >ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>
      }


      {
        women &&
        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={women.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={women.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={women.imageUrlThree} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
              <div>
                <img src={women.imageUrlFour} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{women.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{women.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{women.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]' onClick={() => addCart(women)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]' onClick={() => wishlistCart(women)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>
      }


      {
        kids &&
        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={kids.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={kids.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={kids.imageUrlThree} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
              <div>
                <img src={kids.imageUrlFour} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{kids.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{kids.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{kids.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]'  onClick={() => addCart(kids)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]'  onClick={() => wishlistCart(kids)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>
      }





{
        puma &&
        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={puma.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={puma.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={puma.imageUrlThree} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
              <div>
                <img src={puma.imageUrlFour} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{puma.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{puma.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{puma.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]'  onClick={() => addCart(puma)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]'  onClick={() => wishlistCart(puma)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>
      }




{
        adidas &&
        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={adidas.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={adidas.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={adidas.imageUrlThree} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
              <div>
                <img src={adidas.imageUrlFour} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{adidas.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{adidas.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{adidas.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]'  onClick={() => addCart(adidas)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]'  onClick={() => wishlistCart(adidas)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>
      }





{
        nike &&
        <div className='flex justify-between items-start w-full relative'>
          <div className='w-[55%] flex gap-3 flex-wrap'>
            <div className='flex gap-3'>
              <div>
                <img src={nike.imageUrl} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
              <div>
                <img src={nike.imageUrlTwo} alt="" className='w-[596px] h-[596px] object-cover' />
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <img src={nike.imageUrlThree} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
              <div>
                <img src={nike.imageUrlFour} alt="" className='w-[508px] h-[508px] object-cover' />
              </div>
            </div>



          </div>
          <div className='w-[40%] sticky top-0 left-0'>
            <div>
              <div className='pt-[50px] text-[2.1vw]'>{nike.title}</div>

              <div className='pt-[20px]'><h6 className='text-[1.5vw] text-[#BC3227]'>{nike.price}</h6></div>

              <div><h6 className='pt-[10px] text-[gray]'>Prices include GST</h6></div>

              <div className='pt-[50px]'>
                <h5 className='text-[25px] font-semibold'>Color</h5>
                <h6 className='text-[gray] text-[16px] font-light'>{nike.description}</h6>
              </div>

              <div className='mt-[50px]'><button className='w-[250px] bg-[black] h-[50px] text-center text-[white] mb-[30px]'  onClick={() => addCart(nike)}>ADD TO CART</button></div>
              <div><button className='w-[250px] h-[50px] text-center text-[black] border border-[black]'  onClick={() => wishlistCart(nike)}>ADD TO WISHLIST</button></div>

            </div>
          </div>
        </div>
      }



      


      <div>
        <div className='mt-[100px]'>
          <SimilarItems products={products} selling={selling} sports={sports} men={men} women={women} kids={kids} puma={puma} adidas={adidas} nike={nike} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailes
