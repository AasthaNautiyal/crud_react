import { useStoreState } from "./store/hooks";
import React from "react";
import { useStoreActions } from "./store/hooks";
import "./App.css";

const DisplayUser = () => {
   const {users}=useStoreState((store)=>store);
   const {editUser,deleteUser}=useStoreActions((store)=>store);
   return(
    <div>
      {users.map((data)=>{
        return(
      <div>
      <div>
        {data.name}
        <br></br>
        {data.age}
        <br></br>
        {data.gender}
      </div>
      <div className="button">
      <button onClick={()=>editUser(data.id)}>Edit</button>
      <br></br>
      <hr></hr>
      <button onClick={()=>deleteUser(data.id)}>Delete</button>
      </div>
      </div>
        )
      })}
    </div>
  );
};

export default DisplayUser;
