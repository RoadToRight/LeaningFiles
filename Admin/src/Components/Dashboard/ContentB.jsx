import React, { useContext, useState } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { GoPlus } from "react-icons/go";
import { CiSearch, CiTrash } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdEdit, MdSecurity } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import ContextFirst from "../../Context/Context";
import { useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";


const people = [
  {
    id: 1,
    name: "Text",
  },
  {
    id: 2,
    name: "Number",
  },
  {
    id: 3,
    name: "Boolean",
  },
  {
    id: 4,
    name: "Media",
  },
  {
    id: 5,
    name: "Email",
  },
  {
    id: 6,
    name: "Password",
  },
  {
    id: 7,
    name: "Date",
  },
];

const ContentB = () => {
  const [Popup, setPopup] = useState(false);
  const [Popup2, setPopup2] = useState(false);
  const [Popup2Data, setPopup2Data] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const  params = useParams();
  const [fields, setFields] = useState([
    {
      name: "",
      type: people[0],
     
    },
  ]);
  const [TotalFields, setTotalFields] = useState([]);
  console.log(TotalFields);

  const Params = useParams();

  // console.log(fields)
  const popupFunction = () => {
    setPopup((prev) => !prev);
  };
  const popupFunction2 = () => {
    setPopup2((prev) => !prev);
  };

  /**
   * ? Context
   */

  const { JsonData, setJsonData, JsonField, setJsonField,routesJsonData } =
    useContext(ContextFirst);

  // console.log(JsonField);
  /**
   * ! POPUP FIELDS FUNCTIONS
   */

  // Add a new field
  const addField = () => {
    setFields([...fields, { name: "", type: people[0] }]);
  };
  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    // let JsonData = Object.values({ ...JsonField.TotalFields });
    // JsonData.forEach((x) => {
    //   updatedFields.push(x);
    // });

    // console.log(updatedFields)
    // setFields(updatedFields);
    setTotalFields(updatedFields);
  };
  // Handle field input change
  const handleFieldChangePopup2 = (value) => {
    setPopup2Data(value)
  };

  const deletecollection =() => {
    if(Popup2Data === params.collectionName){
    //  console.log(Popup2Data)
    let FilterCollectionJSon =  JsonData.filter((x) => {
     return  x.collection !== Popup2Data;
      
      })
kmsam
    }

  }


  const removeField = (index) => {
    const updatedFields1 = TotalFields.filter((_, i) => i !== index);
    const updatedFields2 = fields.filter((_, i) => i !== index);
    setFields(updatedFields2)
    setTotalFields(updatedFields1);
  };
  /**
   * ! POPUP FIELDS FUNCTIONS
   */

  const createField = async () => {
    setIsLoading(true); 
    const combineData = {
     collection:Params.collectionName ,
     actions: [
      { FindOne: false },
      { Find: false },
      { Create: false },
      { Update: false },
      { Delete: false },
    ],
     TotalFields,
  };
   

    try {
      let result = await fetch("http://localhost:3001/create/dynamic/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({CollectionCreate:combineData}),
      });
      
      result = await result.json();

      console.log(result,"fadfasd");
     
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
      console.log("Hello")
    }
   
  };

  const DeleteField = async (index) => {
    routesJsonData()
    let updatedData = JsonData.find((ITEM,I) => {

      return ITEM.collection === JsonField.collection;

    })

    if(updatedData.TotalFields.length > 1){
   
      let updatedData2 = updatedData.TotalFields.filter((_,i) => {
        i++
        return index == i;
      })
      updatedData.TotalFields.pop(updatedData2)
    }

    try {
      let result = await fetch("http://localhost:3001/fieldDelete",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(JsonData)
      })

      result = await result.json();


    } catch (error) {
      console.log(error)
    }
 

    

    // console.log(JsonData)



  }

  const EditField = () => {
    
  }


  return (
    <div className="w-full">
      <Content className="">
        <div className="flex justify-between">
          <div className="text-3xl font-extrabold">Category </div>
      <div className="flex gap-3">
      <button
            className={`flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white`}
            onClick={popupFunction}
          >
            <GoPlus className="text-2xl" /> Create new Field
          </button>
      <button
            className={`flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white`}
            onClick={popupFunction2}
          >
            <MdDelete className="text-2xl" /> Delete Collection
          </button>
       
      </div>
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
              <th>Fields Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {JsonField?.TotalFields?.map((fields, index) => {
              index++;
              return (
                <>
                  <tr>
                    <td>{index}</td>
                    <td>{fields?.name}</td>
                    <td>{fields.type?.name}</td>
                    <td>
                      <div className="flex gap-3 items-center text-xl font-extrabold p-1">
                        <MdEdit className="cursor-pointer" onClick={() => EditField(index)}/>
                        <CiTrash className="cursor-pointer" onClick={() => DeleteField(index)}/>
                      </div>
                    </td>
                  </tr>
                  {/* <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
                </>
              );
            })}
          </tbody>
        </Table>
      </Content>

      {Popup && (
        <Popups>
          <div className="pop rounded relative flex flex-col items-center justify-center overflow-y-auto">
            <div
              className="cross absolute right-3 top-3"
              onClick={popupFunction}
            >
              <RxCross2 className="text-2xl cursor-pointer" />
            </div>
            <div className="w-full p-11 flex flex-col justify-evenly h-full">
              {fields?.map((field, index) => (
                <div key={index} className="field-group mb-4">
                  <label>Field Name:</label>
                  <div className="field-input flex items-center gap-4">
                    <input
                      type="text"
                      className="p-2 rounded"
                      placeholder="Type Field Name"
                      onChange={(value) =>
                        handleFieldChange(index, "name", value.target.value)
                      }
                    />
                  </div>
                  <br />

                  <Listbox
                    value={field.type}
                    onChange={(value) =>
                      handleFieldChange(index, "type", value)
                    }
                  >
                    <div className="relative mt-2">
                      <label className="block text-md font-medium leading-6 text-gray-900">
                        Select Field
                      </label>
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                        <span className="flex items-center">
                          <span className="ml-3 block truncate">
                            {field.type.name}
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                          <ChevronUpDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-400"
                          />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people?.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            value={person}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                          >
                            <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                              {person.name}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                              <CheckIcon
                                aria-hidden="true"
                                className="h-5 w-5"
                              />
                            </span>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                  <br />
                  {/* Render Delete Button only if more than one field exists */}
                  {fields.length > 1 && (
                    <button
                      onClick={() => removeField(index)}
                      className="mt-2 bg-red-500 text-white p-2 rounded"
                    >
                      Delete Field
                    </button>
                  )}
                </div>
              ))}

              <div className="buttons flex items-center justify-end gap-3">
                <button
                  className="flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white"
                  onClick={() => {
                    popupFunction();
                    createField();
                  }}
                >
                  <TiTickOutline className="text-xl" disabled={isLoading}/> Create Field
                </button>
                <button
                  className="flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white"
                  onClick={addField}
                >
                  <GoPlus className="text-2xl" /> Add Another Field
                </button>
              </div>
              <br />
            </div>
          </div>
        </Popups>
      )}

          {Popup2 && (
        <Popups>
          
                <div className="pop2 rounded relative flex flex-col items-center justify-center overflow-y-auto">
                <div
              className="cross absolute right-3 top-3"
              onClick={popupFunction2}
            >
              <RxCross2 className="text-2xl cursor-pointer" />
            </div>
                  <h1 className="text-[#7A43F1] text-2xl font-extrabold  mt-8"  >Confirm Delete ?</h1>

                  <div className="w-full p-11 flex flex-col justify-evenly h-full">
                  <div  className="field-group mb-4 flex flex-col gap-2">
                  <label>Type The Collection Name <span className="text-red-500 text-lg font-semibold ml-3">"{params.collectionName}"</span></label>

                  <div className="field-input flex items-center gap-4">
                    <input
                      type="text"
                      className="p-2 rounded"
                      placeholder={`Type ${params.collectionName}`}
                      onChange={(value) =>
                        handleFieldChangePopup2(value.target.value)
                      }
                    />
                    </div>
                    
                  </div>
                  <br />
                  <button
            className={`flex items-center justify-center bg-[#7A43F1] p-2 rounded text-white`}
            onClick={() => {popupFunction2() ; deletecollection()}}
          >
            <MdDelete className="text-2xl" /> Delete Collection
          </button>
                  </div>
          
                </div>
        </Popups> 
      )}
    </div>
  );
};

export default ContentB;

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
  
  .pop2 {
    width: 60vw;
    height: 30vh;
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
