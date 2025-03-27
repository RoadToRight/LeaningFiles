import React, { useState } from 'react'
import styled from 'styled-components';
import Table from "react-bootstrap/Table";
import { GoPlus } from "react-icons/go";
import { CiSearch, CiTrash } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdEdit, MdSecurity } from "react-icons/md";
import { useLocation, useParams } from 'react-router-dom';

let arr = [];
// const people = [
//   {
//     id: 1,
//     name: "Text",
//     avatar: "",
//   },
//   {
//     id: 2,
//     name: "Number",
//     avatar: "",
//   },
//   {
//     id: 3,
//     name: "Boolean",
//     avatar: "",
//   },
//   {
//     id: 4,
//     name: "Media",
//     avatar: "",
//   },
//   {
//     id: 5,
//     name: "Email",
//     avatar: "",
//   },
//   {
//     id: 6,
//     name: "Password",
//     avatar: "",
//   },
//   {
//     id: 7,
//     name: "Date",
//     avatar: "",
//   },
// ];

const ContentM = () => {
    const [Popup, setPopup] = useState(false);
    const [InputData, setInputData] = useState({});
    const [InputData2, setInputData2] = useState([]);
    const location = useLocation();

    const [CollectData, setCollectData] = useState();
    const Params = useParams();
    console.log(Params)
    const popupFunction = () => {
      setPopup((prev) => !prev);
    };

    const fields = [
      { name: 'title', label: 'Title', type: 'text' },
      { name: 'description', label: 'Description', type: 'textarea' },
      { name: 'price', label: 'Price', type: 'number' },
    ];
 
    const inputData = (e,field) => {
     console.log(e.target.value)
      
      setInputData((prev) => ({...prev,[field.name]:e.target.value}))
      
    }
    const AddanotherField = () => {
    let  InputDataLength = Object.keys(InputData).length
      if(fields.length == InputDataLength){
        const InputDataa ={...InputData}

        arr.push(InputDataa)
        setInputData2(arr)
       
        setInputData({})
      }
      
     

    }
 

   const collectDataEntry = () => {



   }


  return (
    <div className='w-full'>

<Content className="">
        <div className="flex justify-between">
          <div className="text-3xl font-extrabold">Category </div>
          <button
            className={`flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white`}
            onClick={popupFunction}
          >
            <GoPlus className="text-2xl" /> Create new entry
          </button>
        </div>
        <br />
        <br />
        <div className="pb-4 flex items-center gap-1">
          <input
            type="search"
            placeholder="Search"
            className="p-2 rounded search"
          />
          <CiSearch className="bg-[#7A43F1] text-white text-4xl font-extrabold p-1 rounded cursor-pointer" />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>

              <th>Id</th>
              <th>Name</th>
              <th>Avatar</th>          
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>18</td>
              <td>
                <div className="flex gap-3 items-center text-xl font-extrabold p-1">
                  <MdEdit className="cursor-pointer" />
                  <CiTrash className="cursor-pointer" />
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>18</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>18</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Content>

      {Popup && (
         <Popups>
         <div className="pop rounded relative flex flex-col items-center justify-center overflow-y-auto">
           <div className="cross absolute right-3 top-3" onClick={popupFunction}>
             <RxCross2 className="text-2xl cursor-pointer" />
           </div>
           <div className="w-full p-11 flex flex-col justify-evenly h-full">
             {fields.map((field, index) => (
               <div key={index} className="field-group mb-4">
                <label>Entry Name:</label>
                 <div className="field-input flex items-center gap-4">
                   
                   <input
                     type="text"
                     className="p-2 rounded"
                     placeholder="Type Field Name"
                     value={InputData[field.name || ""]}
                     onChange={(e) => inputData(e,field)}
                   />
                 </div>
                 <br />
   
             
   <br />
               
               </div>
             ))}
   
             <div className="buttons flex items-center justify-end gap-3">
               <button
                 className="flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white"
                 onClick={() => {popupFunction(); collectDataEntry()}}
               >
                 <GoPlus className="text-2xl" /> Create Entry
               </button>
               <button
                 className="flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white"
                onClick={() => AddanotherField()}
               >
                 <GoPlus className="text-2xl" /> Add Another Entry
               </button>
             </div>
             <br />
           </div>
         
         </div>
       </Popups>
      )}

    </div>
  )
}

export default ContentM;

const Content = styled.div`
  min-height: 100vh;
  width: 100%;
 

  padding: 70px 40px;
  .search {
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.17);
    width: 22%;
  }
`;
const Popups = styled.div`
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 3;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;

  .pop {
    width: 60vw;
    height: 60vh;
    background-color: #ffffff;
    box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.17);
  }
  .field-input {
    input {
      box-shadow: 3px 4px 12px 1px rgba(0, 0, 0, 0.12);
      width: 100%;
    }
  }
`;
