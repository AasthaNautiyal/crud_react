import React,{Fragment, useState} from "react";
import "./App.css";
import {nanoid} from "nanoid";
function App()
{
  const userData=[{name:"XYZ",age:"0",gender:"female"}];
  const [user,setUser]=useState(userData);

  const[addData,setData]=useState({name:" ",age:0,gender:" "});

  const [buttonText, setButtonText] = useState("Add");
  const [editFormData, setEditFormData] = useState({
    name: "",
    age: 0,
    gender: "",
  });

  const [editContactId, setEditContactId] = useState(null);


  const clickSubmit=(e)=>{
     e.preventDefault();
     const nameData=e.target.getAttribute("name");
     const nameValue=e.target.value;

     const newFormData={...addData};
     newFormData[nameData]=nameValue;

     setData(newFormData);
  };
  

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const newData={
      id: nanoid(),
      name:addData.name,
      age:addData.age,
      gender:addData.gender,
    };
    const newUser=[...user,newData];
    setUser(newUser);
  };

  const handleDelete=(e)=>
  {
      const newContacts = [...user];
  
      const index = user.findIndex((users) => users.name === e);
  
      newContacts.splice(index, 1);
  
    setUser(newContacts);
  
  };
  const handleEdit = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      age: editFormData.age,
      gender: editFormData.gender,
    };

    const newContacts = [...user];

    const index = user.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setUser(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditContactId(user.id);

    const formValues = {
      name: user.name,
      age: user.name,
      gender: user.gender,
    };

    setEditFormData(formValues);
  };

  return(
    <div className="main">
       <h2>CRUD APP</h2>
       <div className="form">
        <form onSubmit={handleFormSubmit}>
        <div><input type="text" name="name"placeholder="NAME" onChange={clickSubmit}/></div>
        <div><input type="number" name="age"placeholder="AGE" onChange={clickSubmit}/></div>
        <div><input type="text"name="gender" placeholder="GENDER" onChange={clickSubmit}/></div>
        <button type="submit">{buttonText}</button>
        </form>
       </div>
       <form onSubmit={handleEditFormSubmit}>
       <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
        {user.map((e)=>(
          <Fragment>
            {editContactId === e.id ?(
              <form>
              <input type="text" placeholder="NAME" name="name"value={editFormData.name}onChange={handleEdit}></input>
              <input type="number" placeholder="AGE" name="age" value={editFormData.age} onChange={handleEdit}></input>
              <input type="text"placeholder="GENDER"name="gender"value={editFormData.gender}onChange={handleEdit}></input>
              <button type="submit">Update</button>
            </form>
              ):(
                  <tr>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.gender}</td>
                  <td><button onClick={function(event){handleEditClick(event,e); setButtonText("Update")}}>Edit</button></td>
                  <td><button onClick={() => handleDelete(e.name)}>Delete</button></td>
                  </tr>
            )}
            </Fragment>
          ))
          }
        </tbody>
       </table>
       </form>
    </div>
  )
}

export default App;