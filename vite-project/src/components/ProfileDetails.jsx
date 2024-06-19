import React, { useContext, useState } from 'react'
import { MdAssignmentInd } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsBorderAll } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import myContext from '../context/data/myContext';




const ProfileDetails = () => {

  const context = useContext(myContext)

  const { product, deleteProduct, edithandle, sportsgetproduct, sportsedithandle, sportsDeleteProducts, getbestselling, deletebestselling,
    editebestselling, getmenproducts, menEditehandel, deletemenproduct, getwomenproducts, womenEditehandel, deletewomenproduct, getkidsroducts
    , kidsEditehandel, deletekidsproduct, getbanner, editebanner, deletebanner, getbannerImage, editemenimage, deletemenimage, getwomenbannerImage,
    editwoemenimage, deletewomenimage, getkidsImage, editekidsimage, deletekidsimage, getpuma, deletepuma, editpuma, getadidas, deleteadidas, editadidas,
    getnike, editnike, deletenike } = context


  const [toggle, setToggle] = useState(1)

  function tab(id) {
    setToggle(id)
  }


  return (
    <div className='w-full mb-[100px]'>
      <div>
        <div className='w-full'>
          <div className='pt-[12vw] '>

            {/* <div className='flex justify-between w-[40%] m-[auto]'>

              <div className='w-[40%] rounded-xl border-[2px] border-black text-center flex justify-center flex-col items-center'>

                <div className='text-center text-[80px]'><MdAssignmentInd /></div>

                <div><h6 className='text-[25px]'>20</h6></div>

                <div><h6 className='text-[30px]'>Total Products</h6></div>

              </div>


              <div className='w-[40%] rounded-xl border-[2px] border-black text-center flex justify-center flex-col items-center py-3'>

                <div className='text-center text-[80px]'><BsBorderAll /></div>
                <div><h6 className='text-[25px]'>20</h6></div>
                <div><h6 className='text-[30px]'>Total Producs</h6></div>

              </div>

            </div> */}

            <div className='w-[90%] flex gap-5 m-[auto] mt-10'>
              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(1)}>
                <div className='flex items-center gap-2'>
                  <div><MdProductionQuantityLimits /></div>
                  <div>Total New Arrivals Products</div>
                </div>
              </div>
              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(2)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Total New Sports Shoes Products</div>
                </div>
              </div>

              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(3)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Total Best Selling Shoes Products</div>
                </div>
              </div>

              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(4)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Men Products</div>
                </div>
              </div>

              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(5)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Women Products</div>
                </div>
              </div>

              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(6)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Kids Products</div>
                </div>
              </div>

            </div>



            <div className='w-[90%] flex gap-5 m-[auto] mt-10'>

              
              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(7)}>
                <div className='flex items-center gap-2'>
                  <div><MdProductionQuantityLimits /></div>
                  <div>Banner Image</div>
                </div>
              </div>


              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(8)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>men Products</div>
                </div>
              </div>

              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(9)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Women Products</div>
                </div>
              </div>


              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(10)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Kids Products</div>
                </div>
              </div>






            </div>

            <div className='w-[90%] flex gap-5 m-[auto] mt-10'>



              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(11)}>
                <div className='flex items-center gap-2'>
                  <div><MdProductionQuantityLimits /></div>
                  <div>Nike Products</div>
                </div>
              </div>


              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(12)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Adidas Products</div>
                </div>
              </div>

              <div className='w-[100%] border border-[black] rounded-lg flex justify-center cursor-pointer' onClick={() => tab(13)}>
                <div className='flex items-center gap-2'>
                  <div><BsBorderAll /></div>
                  <div>Puma Products</div>
                </div>
              </div>












            </div>











            <div className='mt-[4vw]'>

              <div className={toggle === 1 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>
                  <Link to='/addTocartform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {product.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;
                  return (
                    <>
                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deleteProduct(item)} /> <Link to="/upDateProducts"><MdEdit className='cursor-pointer' onClick={() => edithandle(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}
              </div>



              <div className={toggle === 2 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/sportsshoesfrom'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {sportsgetproduct.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => sportsDeleteProducts(item)} /> <Link to="/sportsformUpdate"><MdEdit className='cursor-pointer' onClick={() => sportsedithandle(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>

              <div className={toggle === 3 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/bestsellingform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getbestselling.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletebestselling(item)} /> <Link to='/bestsellingupdateform'><MdEdit className='cursor-pointer' onClick={() => editebestselling(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>

              <div className={toggle === 4 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/menproductsform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getmenproducts.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletemenproduct(item)} /> <Link to='/menproductupdate'><MdEdit className='cursor-pointer' onClick={() => menEditehandel(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>


              <div className={toggle === 5 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>
                  <Link to='/womenproductform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getwomenproducts.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;
                  return (
                    <>
                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletewomenproduct(item)} /> <Link to='/womenformupdate'><MdEdit className='cursor-pointer' onClick={() => womenEditehandel(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}
              </div>


              <div className={toggle === 6 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/kidsproductsform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getkidsroducts.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletekidsproduct(item)} /> <Link to='/kidsupdateform'><MdEdit className='cursor-pointer' onClick={() => kidsEditehandel(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>



              <div className={toggle === 7 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/bannersliderimageform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getbanner.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletebanner(item)} /> <Link to='/bannersliderimageupdateform'><MdEdit className='cursor-pointer' onClick={() => editebanner(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>


              <div className={toggle === 8 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/menimage'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>

                      <div className='flex items-center gap-5'>

                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>

                      </div>
                    </div>

                    <div className='w-[50%]'>

                      <div className='flex items-center justify-end gap-5'>

                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>

                      </div>



                    </div>

                  </div>
                </div>

                {getbannerImage.map((item, index) => {

                  const { imageUrl, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>

                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>

                          </div>

                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>



                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletemenimage(item)} /> <Link to='/menimageformupdate'><MdEdit className='cursor-pointer' onClick={() => editemenimage(item)} /></Link></h6></div>


                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>


              <div className={toggle === 9 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/womenimageform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getwomenbannerImage.map((item, index) => {
                  const { imageUrl, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>

                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>

                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletewomenimage(item)} /> <Link to='/updatewomenimage'><MdEdit className='cursor-pointer' onClick={() => editwoemenimage(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>



              <div className={toggle === 10 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>

                  <Link to='/kidsform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getkidsImage.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;

                  return (
                    <>

                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>
                        c
                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletekidsimage(item)} /> <Link to='/updateidsform'><MdEdit className='cursor-pointer' onClick={() => editekidsimage(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}


              </div>




              <div className={toggle === 13 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>
                  <Link to='/pumaform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getpuma.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;
                  return (
                    <>
                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletepuma(item)} /> <Link to="/updatepuma"><MdEdit className='cursor-pointer' onClick={() => editpuma(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}
              </div>




              <div className={toggle === 12 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>
                  <Link to='/adidasform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getadidas.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;
                  return (
                    <>
                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deleteadidas(item)} /> <Link to="/updateadidas"><MdEdit className='cursor-pointer' onClick={() => editadidas(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}
              </div>


              <div className={toggle === 11 ? "show-content" : "bg-[#DDD0B8] w-full h-[100%] content"}>

                <div className='mt-[4vw]'>
                  <Link to='/nikeform'> <div className='text-end w-[95%] m-[auto]'><button className='w-[150px] h-[40px] bg-black text-[white] rounded-lg'> Add Products</button></div> </Link>
                  <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                    <div className='w-[50%]'>
                      <div className='flex items-center gap-5'>
                        <div><h6 className='text-[20px]'>S.NO</h6></div>
                        <div><h6 className='text-[20px]'>IMAGE</h6></div>
                        <div><h6 className='text-[20px]'>TITLE</h6></div>
                      </div>
                    </div>

                    <div className='w-[50%]'>
                      <div className='flex items-center justify-end gap-5'>
                        <div><h6 className='text-[20px]'>PRICE</h6></div>
                        <div><h6 className='text-[20px]'>CATEGORY</h6></div>
                        <div><h6 className='text-[20px]'>DATE</h6></div>
                        <div><h6 className='text-[20px]'>ACTION</h6></div>
                      </div>



                    </div>

                  </div>
                </div>

                {getnike.map((item, index) => {
                  const { title, price, imageUrl, category, date } = item;
                  return (
                    <>
                      <div className='flex justify-between w-[95%] m-[auto] border border-[black] px-3 py-5 rounded-lg mt-[1vw]'>

                        <div className='w-[50%]'>
                          <div className='flex items-center gap-11'>
                            <div><h6 className='text-[20px]'>{index + 1}</h6></div>
                            <div><h6 className='text-[20px]'><img src={imageUrl} alt="" className='w-[50px] h-[50px] object-cover' /></h6></div>
                            <div><h6 className='text-[20px]'>{title}</h6></div>
                          </div>
                        </div>

                        <div className='w-[50%]'>

                          <div className='flex items-center justify-end gap-5'>
                            <div><h6 className='text-[20px]'>₹{price}</h6></div>
                            <div><h6 className='text-[20px]'>{category}</h6></div>
                            <div><h6 className='text-[20px]'>{date}</h6></div>
                            <div><h6 className='text-[20px] flex gap-2'><MdDelete className='cursor-pointer' onClick={() => deletenike(item)} /> <Link to="/updatenike"><MdEdit className='cursor-pointer' onClick={() => editnike(item)} /></Link></h6></div>

                          </div>



                        </div>
                      </div>

                    </>
                  )
                })}
              </div>




            </div>



          </div>
        </div>


      </div>
    </div>
  )
}

export default ProfileDetails

