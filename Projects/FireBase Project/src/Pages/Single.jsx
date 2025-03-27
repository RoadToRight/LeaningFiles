import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../Context/Firebase';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { collection, Firestore } from 'firebase/firestore';

const Single = () => {

    let params = useParams();
    let firebase = useFirebase()
    const [Data, setData] = useState();
    const [URL, setURL] = useState();
    const [qty, setqty] = useState(1)

    useEffect(() => {
        
        const DataSingleFetch = async () => {
          let Data =  await firebase.getDocFireStoreSingle(params.Bookid);
          setData(Data.data())
            console.log(Data.data())
        }
        DataSingleFetch()

    }, [])
    useEffect(() => {
        const getDownloadedURL = async () => {
            let url =  await firebase.DowloadURL(Data.coverImgUrl);
            setURL(url)
        }
        getDownloadedURL()
    }, [Data])
    
    

    if(Data == null){
        return <h1>Loading ...</h1>
    }
    const Ordernow = async () => {

      await firebase.OrderNow(qty,params.Bookid);

    }
    
   

  return (
    <div>
        <h1>{Data.Bookname}</h1>
        <img src={URL} alt="" />
        <Button onClick={Ordernow}>Buy Now</Button>
        <Form.Control value={qty} onChange={(e) => setqty(e.target.value)} type="number" placeholder="Enter email" />
    </div> 
  )
}

export default Single