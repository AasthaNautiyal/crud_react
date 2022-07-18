import { useStoreState } from "./store/hooks";
import React, { useState } from "react";
import { useStoreActions} from "./store/hooks";
const AddUser = () => {
 /* const initialFormState = {name: "", age: 0,gender: ""};
  const[user,setuserData]=useState(initialFormState);
  const {setData}=useStoreActions((store)=>store);
  const handleChange=(e:any)=>{
    setuserData(e.target.value);
  }
  */
  const [newName, setnewName] = useState("");
  const [newAge,setnewAge]=useState("");
  const [gender,setGender]=useState("");
  const {setName}=useStoreActions((store)=>store);
  const {setAge}=useStoreActions((store)=>store);
  const {setGen}=useStoreActions((store)=>store);
  const {add}=useStoreActions((store)=>store);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setName(newName);
          setAge(newAge);
          setGen(gender);
          add({newName,newAge,gender});
        }}
      >
        <input
          type="text"
          id=""
          value={newName}
          onChange={(e)=>setnewName(e.target.value)} 
          placeholder="Name"
        />
        <input
          type="number"
          value={newAge}
          onChange={(e)=>setnewAge(e.target.value)}
          placeholder="Age"
        />
        <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}> 
        <option value="">Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Others">Others</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddUser;
