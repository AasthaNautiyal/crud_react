import React, { useContext } from "react";
import { useState } from "react";
import { UserContext,user} from "../context/userContext";
import { useEffect } from "react";
import nextId from "react-id-generator";
import "../App.css";
const Form = () => {
    const initialData={name:"",id:"",age:0,gender:""};
    const [user, setUser] = useState<user>(initialData);
    const {addUser,updateUser,editUser,editinguser}=useContext(UserContext);
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
      const { name, value } = e.target;
      setUser(prev => {
          return ({
              ...prev,
              [name]: value
          })
      })
  }
  useEffect(()=>{
    setUser(editinguser||initialData)
  },[editinguser])
    return (
      <div>
        <form
          onSubmit={e=>{
            e.preventDefault();
            if(!user.id)
            { 
              addUser({...user,id:nextId()})
            }
            else
            {
              updateUser(user)
              editUser(undefined)
            }
            setUser({
              name: "",
              age: 0,
              gender: "",
              id: ""
          })
          }}
        >
          <input
            type="text"
            name="name"
            id="name"
            value={user.name}
            onChange={handleChange} 
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            id="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Age"
          />
          <select name="gender" id="gender" value={user.gender} onChange={handleChange}> 
          <option value="">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Others">Others</option>
          </select>
          <button>{editinguser?"Update":"Add"}</button>
        </form>
      </div>
    );
  };
  
  export default Form;
  