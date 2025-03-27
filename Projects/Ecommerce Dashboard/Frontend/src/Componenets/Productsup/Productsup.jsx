import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Productsup = () => {

    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState(0);
    const [Category, setCategory] = useState("");
    const [Brand, setBrand] = useState("");
    let navigate  = useNavigate()
   
    const params =  useParams()

    useEffect(() => {
        CollectDataAdd();
    }, [])
    

    const CollectDataAdd =async () => {

        console.log(Title,Price,Category,Brand);
        
        let result = await fetch(`http://localhost:4000/refill/${params.id}`);
        result = await result.json()
        console.log(result)
        setTitle(result.Title)
        setPrice(result.Price)
        setCategory(result.Category)
        setBrand(result.Brand)
    }

    const LetUpdate = async() => {

        let result = await fetch(`http://localhost:4000/update/${params.id}`,{

            method:"put",
            body:JSON.stringify({Title,Price,Category,Brand}),
            headers:{'Content-Type' : 'application/json'},

        })
        result = await result.json();
        console.log(result)
        if(result){
            navigate("/updateProducts")
        }
    }
    
  return (
    <div className='Add-Div'>

    <h2>Update Products</h2>

    <div className="inputs">
      <input type="text"  placeholder='Enter Product Title' value={Title} onChange={(e) => setTitle(e.target.value) }/>
    
      <input type="text"  placeholder='Enter Product Price' value={Price === 0 ? "" : Price} onChange={(e) => setPrice(e.target.value)}/>
   
      <input type="text" placeholder='Enter Product Category' value={Category} onChange={(e) => setCategory(e.target.value)}/>
   
      <input type="text" placeholder='Enter Product Brand' value={Brand} onChange={(e) => setBrand(e.target.value)}/>
     
    </div>

  <button className='Submit-Btn' onClick={LetUpdate}>Update Products</button>

  </div>
  )
}

export default Productsup