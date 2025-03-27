import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../Context/Firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';


const AddListing = () => {
    const [name, setname] = useState("");
    const [isbnNum, setisbnNum] = useState("");
    const [Price, setPrice] = useState(0);
    const [cover, setcover] = useState("");

    const Navigate = useNavigate()
    const Firebase = useFirebase();
    
    useEffect(() => {
        onAuthStateChanged(Firebase.FirebaseAuth, (user) => {
     
         if(user){
         
          Navigate("/Add/listing")
         }else{
          
           Navigate("/")
         }    
     
        })
       }, [])
    

    const handleSubmit = (e) =>{

        e.preventDefault()
        console.log("Uploading Data...")
       
      Firebase.DataListUpload(name,isbnNum,cover,Price)
      console.log("Uploaded Data")
    }
const handleFileChange = (event) =>{
  const file = event.target.files[0]; // Get the first file from the input
 
  if (file) {
    setcover(file); // Set the file name to state
  }
  
}
   
    

  return (
    <div>
        <Form className='mt-5 mx-5' onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder="Book Name" />
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control value={Price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Password" />
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label>Isbn Number</Form.Label>
        <Form.Control value={isbnNum} onChange={(e) => setisbnNum(e.target.value)} type="Number" placeholder="Isbn Number" />
      </Form.Group>
     

      <Form.Group className="mb-3">
        <Form.Label>Cover</Form.Label>
        <Form.Control onChange={handleFileChange} type="file" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Create List
      </Button>
    
     
    </Form>
    </div>
  )
}

export default AddListing