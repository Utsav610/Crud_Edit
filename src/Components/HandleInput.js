import React,{useState} from "react";

const HandleInput = (props) => {

  // const[editData,setEditData]=useState(0)

  const deleteHandler = (id) => {
    const newLists = props.lists.filter((list) => list.id !== id);
    props.onDeleteName(newLists);
  };

  const editHandler=(index)=>{
   // const editData=props.lists.find((list)=> list.id === id);
   // console.log(editData)
   // console.log(list);
   let tempData = props?.lists[index];
   props.onEditableData(tempData)
   console.log("temp "+tempData)
  }

  return (
    <>
    
      <div className="w-90 max-w-43rem p-4 rounded-lg bg-white my-4 mx-auto">
        {console.log(props.lists)}
        {props.lists.map((list,index) => (
          <div key={index}>
            <div className="flex">
              <table className="border-collapse border border-slate-400">
                <tr>
                  <th>Form Data</th>
                </tr>
                <tr>
                  <td className="border border-slate-300">Name</td>
                  <td className="border border-slate-300">{list.fname} {list.lname}</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">Birth Date</td>
                  <td className="border border-slate-300">{list.birth}</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">Address</td>
                  <td className="border border-slate-300">
                    {list.address},{list.address2}
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300">Birth Place</td>
                  <td className="border border-slate-300">{list.Birthplace}</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">Mobile Number</td>
                  <td className="border border-slate-300">{list.MobileNum}</td>
                </tr>
              </table>
            </div>
            <div className="">
              <button
                className="font-inherit bg-purple-900 text-white border border-red-900 py-2 px-4 rounded cursor-pointer hover:bg-red-700"
                onClick={() => deleteHandler(index)}
              >
                Delete
              </button>
              <button
                className="font-inherit bg-green-900 text-white border border-red-900 py-2 px-4 rounded cursor-pointer hover:bg-red-700"
                onClick={() => editHandler(index)}
                >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default HandleInput;
