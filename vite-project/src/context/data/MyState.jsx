import React, { useEffect, useState } from 'react'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase';
import MyContext from './myContext';
import { useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';







function MyState(props) {


  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })


  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")

    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
      getProductData()

    } catch (error) {
      console.log(error)

    }
    setProducts("")
  }

  // ********************** Add Product Section  **********************













  const [product, setProduct] = useState([]);


  const getProductData = async () => {

    try {
      const q = query(
        collection(fireDB, "products"), orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)

      });
      return () => data;
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getProductData();
  }, []);


  // ****** get product // 












  const edithandle = (item) => {
    setProducts(item)
  }


  // ****** edit product // 










  const updateProduct = async () => {

    try {

      await setDoc(doc(fireDB, 'products', products.id), products)

      getProductData();

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
    } catch (error) {

      console.log(error)
    }
    setProducts("")

  }



  // ****** update product // 






  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "products", item.id))
      toast.success('Product Deleted successfully')
      getProductData()
    } catch (error) {
      console.log(error)
    }
  }

  // ****** delete product // 


















  const [sportsProducts, setSportsProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })



  const sportsAddProduct = async () => {
    if (sportsProducts.title == null || sportsProducts.price == null || sportsProducts.imageUrl == null || sportsProducts.category == null || sportsProducts.description == null) {
      return toast.error('Please fill all fields')
    }
    const sportsproductRef = collection(fireDB, "sportsproducts")

    try {
      await addDoc(sportsproductRef, sportsProducts)

      toast.success("Product Add successfully")
      SportsgetProductData()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)


    } catch (error) {
      console.log(error)

    }
    setSportsProducts("")
  }



  // ********************** Add SportsProduct Section  **********************









  const [sportsgetproduct, setSportsgetProduct] = useState([]);




  const SportsgetProductData = async () => {

    try {
      const q = query(
        collection(fireDB, "sportsproducts"), orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setSportsgetProduct(productsArray)

      });
      return () => data;
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    SportsgetProductData();
  }, []);


  // ****** Sportsget product // 












  const sportsedithandle = (item) => {
    setSportsProducts(item)
  }

  // ****** Sportsedite product // 












  const sportsupdateProduct = async () => {

    try {

      await setDoc(doc(fireDB, 'sportsproducts', sportsProducts.id), sportsProducts)

      SportsgetProductData();

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
    } catch (error) {

      console.log(error)
    }
    setSportsgetProduct("")

  }


  // ****** SportsUpdate product // 














  const sportsDeleteProducts = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "sportsproducts", item.id))
      toast.success('Product Deleted successfully')
      SportsgetProductData()
    } catch (error) {
      console.log(error)
    }
  }

  // ****** Sportsdelte product // 








  const [bestSelling, setbestselling] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addBestselling = async () => {
    if (bestSelling.title == null || bestSelling.price == null || bestSelling.imageUrl == null || bestSelling.category == null || bestSelling.description == null) {
      return toast.error('Please fill all fields')
    }

    const bestsellingRef = collection(fireDB, "bestselling")

    try {

      await addDoc(bestsellingRef, bestSelling)
      toast.success("Product Add successfully")
      getbestsellingdata()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setbestselling("")
  }


  // ****** addBestselling product // 






  const [getbestselling, setgetbestselling] = useState([])

  const getbestsellingdata = async () => {

    const q = query(
      collection(fireDB, "bestselling"), orderBy("time")
    )
    try {
      const data = onSnapshot(q, (onsnapshot) => {
        let productArry = [];


        onsnapshot.forEach((doc) => {
          productArry.push({ ...doc.data(), id: doc.id })
        });

        setgetbestselling(productArry)

      })

      return () => data

    } catch (error) {
      console.log(error)
    }

  }


  useEffect(() => {
    getbestsellingdata();
  }, []);


  // ****** getBestselling product // 




  const editebestselling = (e) => {
    setbestselling(e)
  }


  // ****** editeBestselling product // 



  const updatebestselling = async () => {


    try {

      await setDoc(doc(fireDB, "bestselling", bestSelling.id), bestSelling)

      getbestsellingdata()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {

      console.log(error)

    }

    setbestselling("")

  }



  // ****** updateBestselling product // 








  const deletebestselling = async (item) => {

    try {

      await deleteDoc(doc(fireDB, "bestselling", item.id))
      toast.success('Product Deleted successfully')
      getbestsellingdata()

    } catch (error) {
      console.log(error)
    }
  }



  // ****** deleteBestselling product // 







  const [menproduct, setMenProduct] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addmenproduct = async () => {

    if (menproduct.title == null || menproduct.price == null || menproduct.imageUrl == null || menproduct.category == null || menproduct.description == null) {
      return toast.error('Please fill all fields')
    }

    const menproducts = collection(fireDB, "menproduct")

    try {

      await addDoc(menproducts, menproduct)
      toast.success("Product Add successfully")
      getmenproduct()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setMenProduct("")
  }


  // ****** addMen product // 



  const [getmenproducts, setMenproducts] = useState([])


  const getmenproduct = async () => {

    const q = query(
      collection(fireDB, "menproduct"), orderBy("time")
    )

    try {

      const data = onSnapshot(q, (onsnapshot) => {
        let productarry = []

        onsnapshot.forEach((product) => {
          productarry.push({ ...product.data(), id: product.id })
        })

        setMenproducts(productarry)
      })
      return () => data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getmenproduct()
  })


  // ****** getMen product // 






  const menEditehandel = (e) => {
    setMenProduct(e)
  }

  // ****** editeMen product //







  const updatemenproduct = async () => {

    try {

      await setDoc(doc(fireDB, "menproduct", menproduct.id), menproduct)

      getmenproduct()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }
  }





  // ****** updateMen product //


  const deletemenproduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "menproduct", item.id))
      getmenproduct()
      toast.success('Product Deleted successfully')
    } catch (error) {
      console.log(error)
    }

  }



  // ****** deleteMen product //






  const [womenproduct, setwoMenProduct] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addwomenproduct = async () => {

    if (womenproduct.title == null || womenproduct.price == null || womenproduct.imageUrl == null || womenproduct.category == null || womenproduct.description == null) {
      return toast.error('Please fill all fields')
    }

    const womenproducts = collection(fireDB, "womenproduct")

    try {

      await addDoc(womenproducts, womenproduct)
      toast.success("Product Add successfully")
      getwomenproduct()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setwoMenProduct("")
  }


  // ****** addwoMen product // 







  const [getwomenproducts, setwoMenproducts] = useState([])


  const getwomenproduct = async () => {

    const q = query(
      collection(fireDB, "womenproduct"), orderBy("time")
    )

    try {

      const data = onSnapshot(q, (onsnapshot) => {
        let productarry = []

        onsnapshot.forEach((product) => {
          productarry.push({ ...product.data(), id: product.id })
        })

        setwoMenproducts(productarry)
      })
      return () => data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getwomenproduct()
  })


  // ****** getwomen product // 









  const womenEditehandel = (e) => {
    setwoMenProduct(e)
  }

  // ****** editewoMen product //







  const updatewomenproduct = async () => {

    try {

      await setDoc(doc(fireDB, "womenproduct", womenproduct.id), womenproduct)

      getwomenproduct()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }
  }





  // ****** updatewomen product //


  const deletewomenproduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "womenproduct", item.id))
      getwomenproduct()
      toast.success('Product Deleted successfully')
    } catch (error) {
      console.log(error)
    }

  }



  // ****** deletewomen product //












  const [kidsproduct, setkidsProduct] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addkidsproduct = async () => {

    if (kidsproduct.title == null || kidsproduct.price == null || kidsproduct.imageUrl == null || kidsproduct.category == null || kidsproduct.description == null) {
      return toast.error('Please fill all fields')
    }

    const kidsproducts = collection(fireDB, "kidsproduct")

    try {

      await addDoc(kidsproducts, kidsproduct)
      toast.success("Product Add successfully")
      getkidsproduct()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setkidsProduct("")
  }


  // ****** addkids product // 







  const [getkidsroducts, setkidsproducts] = useState([])


  const getkidsproduct = async () => {

    const q = query(
      collection(fireDB, "kidsproduct"), orderBy("time")
    )

    try {

      const data = onSnapshot(q, (onsnapshot) => {
        let productarry = []

        onsnapshot.forEach((product) => {
          productarry.push({ ...product.data(), id: product.id })
        })

        setkidsproducts(productarry)
      })
      return () => data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getkidsproduct()
  })


  // ****** getkids product // 









  const kidsEditehandel = (e) => {
    setkidsProduct(e)
  }

  // ****** editekids product //







  const updatekidsproduct = async () => {

    try {

      await setDoc(doc(fireDB, "kidsproduct", kidsproduct.id), kidsproduct)

      getkidsproduct()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }
  }





  // ****** updatekids product //


  const deletekidsproduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "kidsproduct", item.id))
      getwomenproduct()
      toast.success('Product Deleted successfully')
    } catch (error) {
      console.log(error)
    }

  }



  // ****** deletekids product //







  const [banner, setbanner] = useState({

    imageUrl: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addbanner = async () => {

    if (banner.imageUrl == null) {
      return toast.error('Please fill all fields')
    }

    const banneritems = collection(fireDB, "banner")

    try {

      await addDoc(banneritems, banner)
      toast.success("Product Add successfully")
      getbannerimage()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setbanner("")
  }


  // ****** banner product // 







  const [getbanner, setbanneritem] = useState([])


  const getbannerimage = async () => {

    const q = query(
      collection(fireDB, "banner"), orderBy("time")
    )

    try {

      const data = onSnapshot(q, (onsnapshot) => {
        let productarry = []

        onsnapshot.forEach((product) => {
          productarry.push({ ...product.data(), id: product.id })
        })

        // let productarrys = productarry[Math.floor(Math.random() * productarry.length)]

        setbanneritem(productarry)
      })
      return () => data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getbannerimage()
  })


  // ****** getbanner product // 









  const editebanner = (e) => {
    setbanner(e)
  }

  // ****** editebanner product //







  const updatebanner = async () => {

    try {

      await setDoc(doc(fireDB, "banner", banner.id), banner)

      getbannerimage()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }
  }





  // ****** updatebanner product //






  const deletebanner = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "banner", item.id))
      getbannerimage()
      toast.success('Product Deleted successfully')
    } catch (error) {
      console.log(error)
    }

  }



  // ****** deletebanner product //











  const [menImage, setmenimge] = useState({

    imageUrl: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addmenimage = async () => {

    if (menImage.imageUrl == null) {
      return toast.error('Please fill all fields')
    }

    const banneritems = collection(fireDB, "menimage")

    try {

      await addDoc(banneritems, menImage)
      toast.success("Product Add successfully")
      getmenImage()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setmenimge("")
  }


  // ****** womenimage Image // 


  const [getbannerImage, setbannerImage] = useState([])


  const getmenImage = async () => {

    const q = query(
      collection(fireDB, "menimage"), orderBy("time")
    )

    try {

      const data = onSnapshot(q, (onsnapshot) => {

        let productarry = []

        onsnapshot.forEach((product) => {
          productarry.push({ ...product.data(), id: product.id })
        })

        // let productarrys = productarry[Math.floor(Math.random() * productarry.length)]

        setbannerImage(productarry)
      })
      return () => data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getmenImage()
  })


  // ****** getMEnimage // 



  const editemenimage = (e) => {
    setmenimge(e)
  }

  // ****** editemenimage //







  const updatemenimage = async () => {

    try {

      await setDoc(doc(fireDB, "menimage", menImage.id), menImage)

      getmenImage()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }
  }





  // ****** updatemenimage //


  const deletemenimage = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "menimage", item.id))
      getwomenproduct()
      toast.success('Product Deleted successfully')
    } catch (error) {
      console.log(error)
    }

  }



  // ****** deletemenimage //




  const [womenImage, setwomenimge] = useState({

    imageUrl: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addwomenimage = async () => {

    if (womenImage.imageUrl == null) {
      return toast.error('Please fill all fields')
    }

    const banneritems = collection(fireDB, "womenimage")

    try {

      await addDoc(banneritems, womenImage)
      toast.success("Product Add successfully")
      getwomenImage()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setwomenimge("")
  }

  // ****** women Image // 


  const [getwomenbannerImage, setwomenbannerImage] = useState([])


  const getwomenImage = async () => {

    const q = query(
      collection(fireDB, "womenimage"), orderBy("time")
    )

    try {

      const data = onSnapshot(q, (onsnapshot) => {

        let productarry = []

        onsnapshot.forEach((product) => {
          productarry.push({ ...product.data(), id: product.id })
        })

        // let productarrys = productarry[Math.floor(Math.random() * productarry.length)]

        setwomenbannerImage(productarry)
      })
      return () => data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getwomenImage()
  })

  const editwoemenimage = (e) => {
    setwomenimge(e)
  }

  // ****** editewomenimage //







  const updatwoemenimage = async () => {

    try {

      await setDoc(doc(fireDB, "womenimage", womenImage.id), womenImage)

      getwomenImage()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }
  }





  // ****** updatewomenimage //


  const deletewomenimage = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "womenimage", item.id))
      getwomenproduct()
      toast.success('Product Deleted successfully')
    } catch (error) {
      console.log(error)
    }

  }



  // ****** deletwoemenimage //






  const [kidsImage, setkidsimge] = useState({

    imageUrl: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })


  const addkidsimage = async () => {

    if (kidsImage.imageUrl == null) {
      return toast.error('Please fill all fields')
    }

    const banneritems = collection(fireDB, "kidsimage")

    try {

      await addDoc(banneritems, kidsImage)
      toast.success("Product Add successfully")
      getkidsImages()
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }

    setkidsimge("")
  }

  // ****** women Image // 


  const [getkidsImage, setgetkidsImage] = useState([])


  const getkidsImages = async () => {

    const q = query(
      collection(fireDB, "kidsimage"), orderBy("time")
    )

    try {

      const data = onSnapshot(q, (onsnapshot) => {

        let productarry = []

        onsnapshot.forEach((product) => {
          productarry.push({ ...product.data(), id: product.id })
        })

        // let productarrys = productarry[Math.floor(Math.random() * productarry.length)]

        setgetkidsImage(productarry)
      })
      return () => data

    } catch (error) {
      console.log(error)
    }


  }


  useEffect(() => {
    getkidsImages()
  })

  const editekidsimage = (e) => {
    setkidsimge(e)
  }

  // ****** editewomenimage //







  const updatekidsimage = async () => {

    try {

      await setDoc(doc(fireDB, "kidsimage", kidsImage.id), kidsImage)

      getkidsImages()

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)

    } catch (error) {
      console.log(error)
    }
  }





  // ****** updatewomenimage //


  const deletekidsimage = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "kidsimage", item.id))
      getkidsImages()
      toast.success('Product Deleted successfully')
    } catch (error) {
      console.log(error)
    }

  }



  // ****** deletwoemenimage //



  const [searchTerm, setSearchTerm] = useState("");

  // search heandel//




  //   const [productdetailes,setproductdetailes] = useState('')
  //   const params = useParams()


  //   const getProductdetailes = async () => {

  //     try {
  //         const productTemp = await getDoc(doc(fireDB, "products", params.id))
  //         // console.log(productTemp)
  //         setproductdetailes(productTemp.data());
  //         // console.log(productTemp.data())

  //     } catch (error) {
  //         console.log(error)

  //     }
  // }


  // useEffect(() => {
  //   getProductdetailes()

  // }, [])






  const [puma, setpuma] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })


  const pumaroduct = async () => {
    if (puma.title == null || puma.price == null || puma.imageUrl == null || puma.category == null || puma.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "puma")

    try {
      await addDoc(productRef, puma)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
      getpumaproducts()

    } catch (error) {
      console.log(error)

    }
    setpuma("")
  }

  // ********************** Add Product Section  **********************













  const [getpuma, setgetpuma] = useState([]);


  const getpumaproducts = async () => {

    try {
      const q = query(
        collection(fireDB, "puma"), orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setgetpuma(productsArray)

      });
      return () => data;
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getpumaproducts();
  }, []);


  // ****** get product // 












  const editpuma = (item) => {
    setpuma(item)
  }


  // ****** edit product // 










  const updatePuma = async () => {

    try {

      await setDoc(doc(fireDB, 'puma', puma.id), puma)

      getpumaproducts();

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
    } catch (error) {

      console.log(error)
    }
    setpuma("")

  }



  // ****** update product // 






  const deletepuma = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "puma", item.id))
      toast.success('Product Deleted successfully')
      getpumaproducts()
    } catch (error) {
      console.log(error)
    }
  }

  // ****** delete product // 








  const [adidas, setadidas] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })


  const adidaspoduct = async () => {
    if (adidas.title == null || adidas.price == null || adidas.imageUrl == null || adidas.category == null || adidas.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "adidas")

    try {
      await addDoc(productRef, adidas)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
      getadidasproducts()

    } catch (error) {
      console.log(error)

    }
    setadidas("")
  }

  // ********************** Add Product Section  **********************




  

const [getadidas, setgetadidas] = useState([]);


  const getadidasproducts = async () => {

    try {
      const q = query(
        collection(fireDB, "adidas"), orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setgetadidas(productsArray)

      });
      return () => data;
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getadidasproducts();
  }, []);




  const editadidas = (item) => {
    setadidas(item)
  }


  // ****** edit product // 










  const updateadidas = async () => {

    try {

      await setDoc(doc(fireDB, 'adidas', adidas.id), adidas)

      getadidasproducts();

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
    } catch (error) {

      console.log(error)
    }
    setadidas("")

  }



  // ****** update product // 






  const deleteadidas = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "adidas", item.id))
      toast.success('Product Deleted successfully')
      getadidasproducts()
    } catch (error) {
      console.log(error)
    }
  }

  // ****** delete product // 











  const [nike, setnike] = useState({
    title: null,
    price: null,
    imageUrl: null,
    imageUrlTwo: null,
    imageUrlThree: null,
    imageUrlFour: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })


  const nikepoduct = async () => {
    if (nike.title == null || nike.price == null || nike.imageUrl == null || nike.category == null || nike.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "nike")

    try {
      await addDoc(productRef, nike)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
      getnikeproducts()

    } catch (error) {
      console.log(error)

    }
    setnike("")
  }

  // ********************** Add Product Section  **********************




  const [getnike, setgetnike] = useState([]);


  const getnikeproducts = async () => {

    try {
      const q = query(
        collection(fireDB, "nike"), orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setgetnike(productsArray)

      });
      return () => data;
    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    getnikeproducts();
  }, []);




  const editnike = (item) => {
    setnike(item)
  }


  // ****** edit product // 










  const updatenike = async () => {

    try {

      await setDoc(doc(fireDB, 'nike', nike.id), nike)

      getnikeproducts();

      setTimeout(() => {
        window.location.href = '/profile'
      }, 100)
    } catch (error) {

      console.log(error)
    }
    setnike("")

  }



  // ****** update product // 






  const deletenike = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "nike", item.id))
      toast.success('Product Deleted successfully')
      getnikeproducts()
    } catch (error) {
      console.log(error)
    }
  }

  // ****** delete product // 





// payment //



















  return (
    <MyContext.Provider value={{

      products, setProducts, addProduct, product, edithandle, updateProduct, deleteProduct, sportsProducts, setSportsProducts, sportsAddProduct,
      sportsgetproduct, sportsedithandle, sportsDeleteProducts, sportsupdateProduct, bestSelling, setbestselling, addBestselling, getbestselling,
      editebestselling, updatebestselling, deletebestselling, menproduct, setMenProduct, addmenproduct, getmenproducts, menEditehandel, updatemenproduct,
      deletemenproduct, womenproduct, setwoMenProduct, addwomenproduct, getwomenproducts, womenEditehandel, updatewomenproduct, deletewomenproduct, kidsproduct,
      setkidsProduct, addkidsproduct, getkidsroducts, kidsEditehandel, updatekidsproduct, deletekidsproduct, banner, setbanner, addbanner, getbanner, editebanner, updatebanner,
      deletebanner, menImage, setmenimge, addmenimage, getbannerImage, editemenimage, updatemenimage, deletemenimage, womenImage, setwomenimge, addwomenimage, getwomenbannerImage,
      editwoemenimage, updatwoemenimage, deletewomenimage, kidsImage, setkidsimge, addkidsimage, getkidsImage, editekidsimage, updatekidsimage, deletekidsimage, searchTerm, setSearchTerm,
      puma,setpuma,pumaroduct,getpuma,editpuma,updatePuma,deletepuma,adidas,setadidas,adidaspoduct,getadidas,editadidas,updateadidas,deleteadidas,nike,setnike,nikepoduct,getnike,editnike,
      updatenike,deletenike


    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState