import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { useFirebase } from "../Context/Firebase";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Listing = () => {
  const [books, setbooks] = useState([]);
  const [URL, setURL] = useState(null);
  const [DownloadURL, setDownloadURL] = useState();
  const Firebase = useFirebase();
  let Navigate = useNavigate()

  useEffect(() => {
    const ListingBooks = async  () => {
      let docs = await Firebase.getDocsFireStore();

      setbooks(docs.docs);
    };
    ListingBooks();

   

  }, []);

  useEffect(() => {
     
  books?.map((X) => {
    setURL(X.data().coverImgUrl)
  })

  }, [books])

  useEffect(() => {
    const handle = async() => {
        let urls = await Firebase.DowloadURL(URL);
        setDownloadURL(urls)
    }
    handle()
    
  }, [URL])
 
    console.log(URL)
  return (
    <div>
      {books.map((booksInMap,i) => {
        return (
          <Card key={i} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={DownloadURL} />
            <Card.Body>
              <Card.Title>{booksInMap.data().Bookname}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <p></p>
              <Button variant="primary" onClick={() => Navigate(`/books/view/${booksInMap.id}`)}>View</Button>
            </Card.Body>
          </Card>
        );
      })}
    
    </div>
  );
};

export default Listing;
