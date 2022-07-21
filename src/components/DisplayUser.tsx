import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../App.css";

const DisplayUser = () => {
   const {editUser,deleteUser,users}=useContext(UserContext);
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
