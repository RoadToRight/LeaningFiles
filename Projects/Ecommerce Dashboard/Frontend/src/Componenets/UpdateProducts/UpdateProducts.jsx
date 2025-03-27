import React, { useEffect, useState } from "react";
import "./UpdateProducts.css";
import { Link } from "react-router-dom";
const UpdateProducts = () => {
  const [Products, setProducts] = useState([]);
 

  useEffect(() => {
    FetchProducts()
    
  }, []);

  let FetchProducts = async () => {
    let result = await fetch("http://localhost:4000/products");
    result = await result.json();
    setProducts(result);
  };
 
  let DeletePro = async (id) => {
  
    let result = await fetch(`http://localhost:4000/deleteproduct/${id}`,{

      method:"delete",
      headers:{'Content-Type' : 'application/json'},


    })
    result= await result.json();
 
    
    if(result.deletedCount !== 0){
      alert("Products Is deleted")
      FetchProducts()
  }
   
  

}

const DeleteAllProducts =async () => {

  let result  = await fetch('http://localhost:4000/deleteAllproduct',{

    method:"delete"

  })

  result = await result.json()
  console.log(result)

}

const Filter = async (e) => {

  let key = e.target.value
if(key){
  let result = await fetch(`http://localhost:4000/search/${key}`);
  result = await result.json(); 
  if(result){
    setProducts(result);
  }
    
  
}else{
  FetchProducts();
}


 


}




  return (
    <div className="productsList">
      <h1>Products List</h1>
    <input className="search-engine" type="text" onChange={(e) => Filter(e)}/>
      <div className="table">
        <ul>
          <li>S NO</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Brand</li>
          <li>Operations</li>
        </ul>
        {Products.length !== 0 ? Products.map((x, i) => {
          return (
            <ul key={i}>
              <li>{i+1}</li>
              <li>{x.Title}</li>
              <li>{x.Price}</li>
              <li>{x.Category}</li>
              <li>{x.Brand}</li>
              <li><button onClick={() => DeletePro(x._id)}>DeleteProduct</button></li>
              <Link to={"/Products/"+x._id}><button>Update</button></Link>
            </ul>
          );
        }): <h1>No Result Found</h1>}
      </div>
      <button  onClick={DeleteAllProducts}>Delete All Products</button>
    </div>
  );
};

export default UpdateProducts;
