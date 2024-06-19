const [products, setProducts] = useState({
  title: null,
  price: null,
  imageUrl: null,
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

// ********************** Add Product Section  **********************
const addProduct = async () => {
  

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

}

const [product, setProduct] = useState([]);

const getProductData = async () => {

    setLoading(true)

    try {

        const q = query( 
            
            collection(fireDB, "products"),
         
        
        
        )
            
            // limit(5)
          
       getDocs(q)
        .then((snapshot) =>{

            let adidas = []

snapshot.docs.forEach((doc) =>{

adidas.push({...doc.data(),id:doc.id})


setProduct(adidas)
})
        })

    } catch (error) {
        console.log(error)
        setLoading(false)
    }

}

useEffect(() => {
    getProductData();
    
}, []);