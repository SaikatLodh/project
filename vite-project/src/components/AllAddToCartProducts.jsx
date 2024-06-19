import React, { useEffect, useState } from 'react'
import img from '../../src/assets/2724283.jpg'
import { MdDelete } from "react-icons/md";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteFromCart } from '../redux/cartSlice';
import Buynow from './Buynow';
import {  Link } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../firebase';
import { GiTireIronCross } from "react-icons/gi";







const AllAddToCartProducts = () => {

  useEffect(()=>{
    document.querySelector(".click").addEventListener("click",function(){
      document.querySelector(".lefty").style.left = "0%"
    })

    document.querySelector(".cross").addEventListener("click",function(){
      document.querySelector(".lefty").style.left = "-100%"
    })
  })

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    

    const [totalAmount, setTotalAmount] = useState(0);

   

    //useEffect(() => {
        //let temp = 0;
        //cartItems.forEach((cartItem) => {
         // temp = temp + parseInt(cartItem.price)
       // })
       // setTotalAmount(temp);
        // console.log(temp)
     // }, [cartItems])
    
     // const shipping = parseInt(100);
     // const grandTotal = shipping + totalAmount
  
     useEffect(() =>{

        const total = cartItems.reduce((acc,item) => acc + parseInt(item.price),0)
  
       setTotalAmount(total)
  
      },[cartItems])
  
  
      const shipping = parseInt(100);
  
      const grandTotal = shipping + totalAmount
  
    //   console.log(totalAmount)
  
  
    

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
        toast.success('delete g cart');
      }

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cartItems));
    },[cartItems])



  

    const [name, setName] = useState("")
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
  
    const buynow = async () =>{
      // validation//
  
      if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
        return toast.error("All fields are required", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
  
  
  
      const addressInfo = {
        name,
        address,
        pincode,
        phoneNumber,
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      }
  
  
   // rezorpay//
  
      var options = {
        key: "rzp_test_vwCcwkAnsHqzVN",
        key_secret: "gEox2wsP9AaBqXWx05dEqntW",
        amount: parseInt(grandTotal * 100),
        currency: "INR",
        order_receipt: 'order_rcptid_' + name,
        name: "E-Bharat",
        description: "for testing purpose",
        handler: function (response) {
  
          // console.log(response)
          toast.success('Payment Successful')
  
          const paymentId = response.razorpay_payment_id
          // store in firebase 
          const orderInfo = {
            cartItems,
            addressInfo,
            date: new Date().toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            ),
            // email: JSON.parse(localStorage.getItem("user")).email,
            // userid: JSON.parse(localStorage.getItem("user")).uid,
            paymentId
          }
  
          try {
            const result = collection(fireDB, "orders")
            addDoc(result,orderInfo)
          } catch (error) {
            console.log(error)
          }
        },
  
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
      console.log(pay)
      setName("")
      setAddress("")
      setPincode("")
      setPhoneNumber("")
    }







    return (

        <div data-scroll-container className='relative overflow-hidden addtoCart-top'>


            <div className='relative'>
                <div className='w-full  pt-[8vw] px-10 pb-10 '>
                    <div className='flex my-10 flex-wrap justify-between relative'>

                        <div className='w-[65%] addtocart-anam'>

                            {cartItems.map((item,key) => {
                               const {imageUrl,price,title,category} = item
                                return (
                                    <>
                                        <div className='w-[100%] mb-10 ' key={key}>
                                            <div className='relative'>
                                                <img src={imageUrl} alt="" className='w-[100%] h-[600px] object-cover  rounded-[30px]' data-scroll-speed-5 />
                                                <div className='absolute right-4 top-4 cursor-pointer text-[24px]' onClick={() => deleteCart(item)}><MdDelete /></div>

                                            </div>

                                            <div className='text-[50px] text-center text-[#D88774]'>{category}</div>
                                            <div className='text-[30px] text-center'>{title}</div>
                                            <div className='text-[20px] text-center'> RS:{price}</div>
                                        </div>
                                    </>
                                )
                            })}


                        </div>

                        <div className='w-[30%] relative'>

                            <div className=' w-full h-[100%]'>
                                <div>
                                    <div>
                                        <div className='w-[100%] relative z-10'>
                                            <div className='absolute top-0 left-0 z-[-1]'></div>
                                            <div className='bg-[#ffffff00] w-[100%] px-5'>

                                                <div>
                                                    <div className='text-center py-5'><h2 className='text-[30px]'>Price Details</h2></div>
                                                    <div className='flex gap-3 py-5 justify-center'>
                                                        <h6>price:</h6>
                                                        <h6>{totalAmount}</h6>
                                                    </div>

                                                    <div className='flex gap-3 py-5 justify-center'>
                                                        <h6>Delivery Charges:</h6>
                                                        <h6>{shipping}</h6>
                                                    </div>

                                                    <div className='flex gap-3 py-5 justify-center'>
                                                        <h6>Total Price:</h6>
                                                        <h6>{grandTotal}</h6>
                                                    </div>
                                                </div>



                                            </div>

                                           <div className='text-center click'> <button className='w-[150px] h-[50px]  border border-[black] mt-5'>Place Order</button> </div>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>



                  </div>

                  
                </div>

                <div className='absolute left-[-100%] z-[100] top-0 flex  justify-center h-full w-full bg-white transition-all duration-300 lefty'>
                  <Buynow name={name} address={address} pincode={pincode} phoneNumber={phoneNumber} setname={setName} setaddress={setAddress} setpincode={setPincode} setphonenumber={setPhoneNumber} buynow={buynow} />
                  <div className='absolute right-5 top-5 font-[25px] cross cursor-pointer'><GiTireIronCross /></div>  
                  
                  </div> 
               
            </div>
        </div>
    )
}

export default AllAddToCartProducts
