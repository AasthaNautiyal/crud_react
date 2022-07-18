import { useStoreState } from "./store/hooks";
import React from "react";
import { useStoreActions } from "./store/hooks";

const TodoItem = () => {
   const{id,name,age,gender}=useStoreState((store)=>store);
   const {remove}=useStoreActions((store)=>store);
   const {edit}=useStoreActions((store)=>store);
 return (
    <div>
      <div>
        {name}
        <br></br>
        {age}
        <br></br>
        {gender}
      </div>
      <div> 
      <button onClick={()=>edit(id)}>Edit</button>
      <button onClick={()=>remove(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
