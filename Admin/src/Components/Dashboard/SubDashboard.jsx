import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import React, { useContext, useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContextFirst from "../../Context/Context";

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

const SubDashboard = ({ Heading, subHeading, collections, LinkTo, Show }) => {
  const [Popup, setPopup] = useState(false);
  const [collectionName, setcollectionName] = useState();
  const [TotalFields, setTotalFields] = useState([
    {
      name: "",
      type: people[0],
    },
  ]);

  // console.log(TotalFields)
  /**
   * ? Context
   */

  const { JsonData, setJsonField,routesJsonData } =
    useContext(ContextFirst);

  const popupFunction = () => {
    setPopup((prev) => !prev);
  };

  useEffect(() => {
    
    routesJsonData()
   
  }, [])

  // console.log(JsonData);


  const createCollection = async () => {
    const combineData = JsonData.push({
      collection: collectionName,
      actions: [
        { FindOne: false },
        { Find: false },
        { Create: false },
        { Update: false },
        { Delete: false },
      ],
      TotalFields,
    });
    // routesJsonData()
    console.log(JsonData);

    try {
        let result = await fetch("http://localhost:3001/create/dynamic/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({CollectionCreate2:JsonData}),

        });

        result = await result.json();

        console.log(result);
      } catch (error) {
        console.log(error);
      }
  };

  
  // Handle field input change
  const handleFieldChange = (index, key, value) => {
    const updatedTotalFields = [...TotalFields];
    updatedTotalFields[index][key] = value;
    setTotalFields(updatedTotalFields);
  };

  // Remove a field (only if more than one exists)
  const removeField = (index) => {
    const updatedTotalFields = TotalFields.filter((_, i) => i !== index);
    setTotalFields(updatedTotalFields);
  };

  const extractTotalFieldsinJsonData = (item) => {
    setJsonField(item);
  };

  return (
    <SubDashDiv>
      <div className="Heading text-2xl font-extrabold text-center py-8 px-2 text-white">
        {Heading}
      </div>
      <hr className="w-20 text-white" />

      <div className="your-collections text-white px-4">
        <div className="heading font-bold py-4">{subHeading}</div>

        <ul className="pb-6">
          {Show && JsonData.length
            ? JsonData.map((item, index) => {
                return (
                  <Link
                    to={`/Content/Type/Builder/${item.collection}`}
                    onClick={() => extractTotalFieldsinJsonData(item)}
                  >
                    <li>{item.collection}</li>
                  </Link>
                );
              })
            : ""}
        </ul>
      </div>
      <div className="flex items-center justify-center">
      <button
        className={`CreateCollectionBtn flex items-center justify-center text-[#7A43F1] px-0.5 py-1 rounded bg-white`} 
        onClick={() => popupFunction()}
      >
        <GoPlus className="text-xl" /> Create new collection
      </button>
      </div>
      <br />
      <hr className="w-20 text-white" />

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
              {TotalFields?.map((field, index) => (
                <div key={index} className="field-group mb-4">
                  <label>Collection</label>
                  <div className="field-input flex items-center gap-4">
                    <input
                      type="text"
                      className="p-2 rounded"
                      placeholder="Type Collection Name"
                      value={collectionName}
                      onChange={(e) => setcollectionName(e.target.value)}
                    />
                  </div>
                  <br />
                  <label>Field Name</label>
                  <div className="field-input flex items-center gap-4">
                    <input
                      type="text"
                      className="p-2 rounded"
                      placeholder="Type Field Name"
                      value={field.name}
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
                        Select First Field
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
                        {people.map((person) => (
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
                  {TotalFields?.length > 1 && (
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
                    createCollection();
                  }}
                >
                  <TiTickOutline className="text-xl" /> Create Collection
                </button>
              </div>
              <br />
            </div>
          </div>
        </Popups>
      )}
    </SubDashDiv>
  );
};

export default SubDashboard;


const SubDashDiv = styled.div`
  


 .CreateCollectionBtn{
    width: 89%;
    @media (max-width:1024px) {

      font-size: 15px;
      font-weight: 900;
    }
 }

`

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
