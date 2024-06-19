import './App.css'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import LocomotiveScroll from 'locomotive-scroll';
import Authantication from './components/Authantication'
import Wishlist from './components/Wishlist'
import AddToCart from './components/AddToCart'
import Profile from './components/Profile'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { auth } from './firebase'
import { loginUser, setLoading } from './redux/useSlice'
import Loader from './components/Loader'
import AddproductsForm from './components/AddproductsForm';
import MyState from './context/data/MyState'
import UpDateProducts from './components/UpDateProducts'
import SportsShoesFrom from './components/SportsShoesFrom'
import SportsformUpdate from './components/SportsformUpdate'
import BestSellingForm from './components/BestSellingForm'
import BestsellingUpdateForm from './components/BestsellingUpdateForm'
import MensShoes from './components/MensShoes'
import WomenShoes from './components/WomenShoes'
import KidsShoes from './components/KidsShoes'
import ProductDetailes from './components/ProductDetailes'
import MenProductsForm from './components/MenProductsForm'
import WomenProductForm from './components/WomenProductForm'
import KidsproductsForm from './components/KidsproductsForm'
import BannerSliderImageForm from './components/BannerSliderImageForm'
import MenImageForm from './components/MenImageForm'
import WomenImageForm from './components/WomenImageForm'
import KidsImageForm from './components/KidsImageForm'
import Menproductupdate from './components/Menproductupdate'
import Womenformupdate from './components/Womenformupdate'
import Kidsupdateform from './components/Kidsupdateform'
import Bannersliderimageupdateform from './components/Bannersliderimageupdateform'
import MenImage from './components/MenImage'
import Menimageformupdate from './components/Menimageformupdate'
import Updatewomenimage from './components/Updatewomenimage'
import Kidsform from './components/Kidsform'
import Updateidsform from './components/Updateidsform'
import Searchpage from './components/Searchpage'
import Pumaform from './components/Pumaform'
import Updatepuma from './components/Updatepuma'
import Adidasfrom from './components/Adidasfrom'
import Updateadidas from './components/Updateadidas'
import Nikeform from './components/Nikeform'
import Updatenike from './components/Updatenike'
import Nikeproductshow from './components/Nikeproductshow'
import Adidasshow from './components/Adidasshow'
import Pumashow from './components/Pumashow'
import Buynow from './components/Buynow'





























const locomotiveScroll = new LocomotiveScroll();


function App() {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);



  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const isLoading = useSelector((state) => state.user.isLoading);

  // useEffect(()=>{
  //   const activePage = '/searchpage'

  //   if(history.location.includes(`${activePage}`)){
  //     document.querySelector(".input").style.display = "none"
  //   }
  // })

  return (
    <>

      <div data-scroll-container className='overflow-hidden'>

        <MyState>

          <BrowserRouter>
            <Header />

            <Routes>

              {isLoading ? <> <Route path="/" element={<Loader />} /></> : <>{user ? <Route path="/" element={<ProtextedRoute><Home /></ProtextedRoute>} /> : <Route path="/" element={<Authantication />} />}</>}




              <Route path="/profile" element={ <ProtextedRouteAdmin><Profile /></ProtextedRouteAdmin> } />
              <Route path="/wishlist" element={<ProtextedRoute><Wishlist /></ProtextedRoute>} />
              <Route path="/addToCart" element={<ProtextedRoute><AddToCart /></ProtextedRoute>} />
              <Route path="/addTocartform" element={<ProtextedRouteAdmin><AddproductsForm /></ProtextedRouteAdmin>} />
              <Route path='/upDateProducts' element={<ProtextedRouteAdmin><UpDateProducts /></ProtextedRouteAdmin>} />
              <Route path='/sportsshoesfrom' element={<ProtextedRouteAdmin><SportsShoesFrom /></ProtextedRouteAdmin>} />
              <Route path='/sportsformUpdate' element={<ProtextedRouteAdmin><SportsformUpdate /></ProtextedRouteAdmin>} />
              <Route path='/bestsellingform' element={<ProtextedRouteAdmin><BestSellingForm /></ProtextedRouteAdmin>} />
              <Route path='/bestsellingupdateform' element={ <ProtextedRouteAdmin><BestsellingUpdateForm /></ProtextedRouteAdmin>} />
              <Route path='/mensshoes' element={<ProtextedRoute><MensShoes /></ProtextedRoute>} />
              <Route path='/womenshoes' element={<ProtextedRoute><WomenShoes /></ProtextedRoute> } />
              <Route path='/kidsshoes' element={<ProtextedRoute><KidsShoes /></ProtextedRoute> } />
              <Route path='/productdetailes/:id' element={ <ProductDetailes/> } />
              <Route path='/menproductsform' element={<ProtextedRouteAdmin><MenProductsForm /></ProtextedRouteAdmin> } />
              <Route path='/womenproductform' element={<ProtextedRouteAdmin><WomenProductForm /></ProtextedRouteAdmin> } />
              <Route path='/kidsproductsform' element={ <ProtextedRouteAdmin><KidsproductsForm /></ProtextedRouteAdmin> } />
              <Route path='/bannersliderimageform' element={ <ProtextedRouteAdmin><BannerSliderImageForm /></ProtextedRouteAdmin> } />
              <Route path='/menimageform' element={ <ProtextedRouteAdmin><MenImageForm /></ProtextedRouteAdmin> } />
              <Route path='/womenimageform' element={ <ProtextedRouteAdmin><WomenImageForm /></ProtextedRouteAdmin> } />
              <Route path='/kidsimageform' element={ <ProtextedRouteAdmin><KidsImageForm /></ProtextedRouteAdmin> } />
              <Route path='/menproductupdate' element={ <ProtextedRouteAdmin><Menproductupdate /></ProtextedRouteAdmin> } />
              <Route path='/womenformupdate' element={ <ProtextedRouteAdmin><Womenformupdate /></ProtextedRouteAdmin>} />
              <Route path='/kidsupdateform' element={ <ProtextedRouteAdmin><Kidsupdateform /></ProtextedRouteAdmin> } />
              <Route path='/bannersliderimageupdateform' element={<ProtextedRouteAdmin><Bannersliderimageupdateform /></ProtextedRouteAdmin> } />
              <Route path='/menimage' element={ <ProtextedRoute><MenImage /></ProtextedRoute>} />
              <Route path='/menimageformupdate' element={ <ProtextedRouteAdmin><Menimageformupdate /></ProtextedRouteAdmin> } />
              <Route path='/womenimageform' element={ <ProtextedRouteAdmin><WomenImageForm /></ProtextedRouteAdmin>} />
              {/* <Route path='/updatewomenimage' element={<Updatewomenimage/>} /> */}
              <Route path='/updatewomenimage' element={ <ProtextedRouteAdmin><Updatewomenimage /></ProtextedRouteAdmin> } />
              <Route path='/kidsform' element={ <ProtextedRouteAdmin><Kidsform /></ProtextedRouteAdmin> } />
              <Route path='/updateidsform' element={ <ProtextedRouteAdmin><Updateidsform /></ProtextedRouteAdmin> } />
              <Route path='/searchpage' element={ <ProtextedRoute><Searchpage /></ProtextedRoute>} />
              <Route path='/pumaform' element={ <ProtextedRouteAdmin><Pumaform /></ProtextedRouteAdmin> } />
              <Route path='/updatepuma' element= { <ProtextedRouteAdmin><Updatepuma /></ProtextedRouteAdmin> } />
              <Route path='/adidasform' element={ <ProtextedRouteAdmin><Adidasfrom /></ProtextedRouteAdmin> } />
              <Route path='/updateadidas' element={ <ProtextedRouteAdmin><Updateadidas /></ProtextedRouteAdmin> } />
              <Route path='/nikeform' element={ <ProtextedRouteAdmin><Nikeform /></ProtextedRouteAdmin>} />
              <Route path='/updatenike' element={<ProtextedRouteAdmin><Updatenike /></ProtextedRouteAdmin> } />
              <Route path='/nikeshow' element={ <ProtextedRoute><Nikeproductshow /></ProtextedRoute> } />
              <Route path='/adidasshow' element={ <ProtextedRoute><Adidasshow /></ProtextedRoute> } />
              <Route path='/pumashow' element={ <ProtextedRoute><Pumashow /></ProtextedRoute> } />
              <Route path='/buynow' element={ <ProtextedRoute><Buynow /></ProtextedRoute> } />






            </Routes>

            <Footer />

          </BrowserRouter>


        </MyState>



      </div>



    </>
  )
}

export default App


const ProtextedRoute = ({ children }) => {

  const user = useSelector((state) => state.user.user);

  if (user) {
    return children
  }
  else {
    return <Navigate to='/' />
  }
}



const ProtextedRouteAdmin = ({ children }) => {

  const admin = JSON.parse(localStorage.getItem('user'))
  
  if (admin.user.email === 'saikatlodh8@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/'/>
  }
}
