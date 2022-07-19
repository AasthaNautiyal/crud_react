import { useStoreState } from "./store/hooks";
import React, { useEffect, useState } from "react";
import { useStoreActions} from "./store/hooks";
import "./App.css";
const AddUser = () => {
  const initialData={name:"",id:"",age:0,gender:""};
  const [user, setUser] = useState(initialData);
  const {addUser,updateUser,editUser}=useStoreActions((store)=>store);
  const{editingUser}=useStoreState((store)=>store);
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
  setUser(editingUser||initialData)
},[editingUser])
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if(!user.id)
          { 
            addUser(user)
          }
          else
          {
            updateUser(user)
            editUser(undefined)
          }
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
        <button>{editingUser?"Update":"Add"}</button>
      </form>
    </div>
  );
};

export default AddUser;
