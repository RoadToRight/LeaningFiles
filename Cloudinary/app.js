import express from "express";
import {v2 as cloudinary} from "cloudinary"

const app = express();



cloudinary.config({
  cloud_name: 'dp6b6emb9',
  api_key: '618889658729159',
  api_secret: 'LjXFYOQkqqvxKh-gC6jucSQlP8w'
});

cloudinary.api.resources(
    { type: 'upload' }, // Optional: specify folder
    function(error, result) {
      if (error) {
        console.error("Error fetching photos:", error);
      } else {
        console.log("Photos:", result.resources);
      }
    }
  );
  

app.listen(3000,() => {
    console.log("Server is running")
})