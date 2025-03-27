import React, { useState } from 'react'
import "./AddPro.css"


const AddPro = () => {

    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState(0);
    const [Category, setCategory] = useState("");
    const [Brand, setBrand] = useState("");
    const [err, seterr] = useState(false)

    let auth = JSON.parse(localStorage.getItem('users'))
    let UserId = auth._id
    
    const CollectDataAdd = async() => {

      if(!Title || !Price || !Category || !Brand){

        seterr(true)

      }

        let result = await fetch('http://localhost:4000/addproducts',{

            method:"post",
            body:JSON.stringify({Title,Price,Category,Brand,UserId}),
            headers:{'Content-Type' : 'application/json'},

        })
  
        result = await result.json();
        console.log(result)

    }


  return (
    <div className='Add-Div'>

    <h2>Add Products</h2>

    <div className="inputs">
      <input type="text"  placeholder='Enter Product Title' value={Title} onChange={(e) => setTitle(e.target.value) }/>
      {err && !Title ? <small className="errMessage" color='red'>Name Field Contain Error</small> : null}
      <input type="text"  placeholder='Enter Product Price' value={Price === 0 ? "" : Price} onChange={(e) => setPrice(e.target.value)}/>
      {err && !Price ? <small className="errMessage" color='red'>Price Field Contain Error</small> : null}
      <input type="text" placeholder='Enter Product Category' value={Category} onChange={(e) => setCategory(e.target.value)}/>
      {err && !Category ? <small className="errMessage" color='red'>Category Field Contain Error</small> : null}
      <input type="text" placeholder='Enter Product Brand' value={Brand} onChange={(e) => setBrand(e.target.value)}/>
      {err && !Brand ? <small className="errMessage" color='red'>Brand Field Contain Error</small> : null}
    </div>

  <button className='Submit-Btn' onClick={CollectDataAdd}>Add Products</button>

  </div>
  )
}

export default AddPro