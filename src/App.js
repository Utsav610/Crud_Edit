import "./App.css";
import React, { useState } from "react";
import BasicForm from "./Components/BasicForm";
import HandleInput from "./Components/HandleInput";
import AuthContext from "./Components/auth-context";

function App() {
  const [datalist, setdatalist] = useState([]);
  const [editData, setEditData] = useState([]);

  const handleDeleteItem = (newLists) => {
    setdatalist(newLists);
  };

  const onEditData = (editData) => {
   // setdatalist(editData);
   setEditData(editData);
    console.log("edit "+editData);
  };


  const addData = (formData) => {
    console.log("id value"+formData.id);
   if(formData.id===undefined){
    setdatalist([
      ...datalist,
      {
        id: Date.now(),
        fname: formData.fname,
        lname: formData.lname,
        address: formData.address,
        address2: formData.address2,
        Birthplace: formData.Birthplace,
        MobileNum: formData.MobileNum,
      },
    ]);
   }
   else{
    const Dataindex=datalist.findIndex((data)=>data.id ===formData.id );
    datalist.splice(Dataindex,1);
    setdatalist([
      ...datalist,
      {
        id: formData.id,
        fname: formData.fname,
        lname: formData.lname,
        address: formData.address,
        address2: formData.address2,
        Birthplace: formData.Birthplace,
        MobileNum: formData.MobileNum,
      },
    ]);
    setEditData([]);
  }
  };

  return (
    <AuthContext.Provider value={{isData:editData}}>
      <BasicForm onHandleItem={addData} />
      <HandleInput
        lists={datalist}
        onDeleteName={handleDeleteItem}
        onEditableData={onEditData}
      />
    </AuthContext.Provider>
  );
}

export default App;
