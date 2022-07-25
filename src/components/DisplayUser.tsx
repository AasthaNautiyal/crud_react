import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import "../App.css";
import { Link } from "react-router-dom";

const DisplayUser = () => {
   const {editUser,deleteUser,users}=useContext(UserContext);
   return(
    <div>
      {users.map((data)=>{
          let link = `user/${data.id}`;
        return(
      <div>
      <div>
       ID: {data.id}
        <br></br>
        {data.name}
        <br></br>
      </div>
      <div>
      <Link to={link}><button className="button">View</button></Link>
      <br></br>
      <hr></hr>
      <button className='button'onClick={()=>editUser(data.id)}>Edit</button>
      <br></br>
      <hr></hr>
      <button className='button' onClick={()=>deleteUser(data.id)}>Delete</button>
      </div>
      </div>
        )
      })}
    </div>
  );
};

export default DisplayUser;