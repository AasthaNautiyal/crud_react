import React, { useState, useEffect } from "react";
import validator from "./validator";

const UserForm = (props:any) => {
    const initUser = { id:0, name: "", age: 0 ,gender:" "};
const [formValue, setFormValue] = useState(initUser);
const rules = [
    { key: "name", required: true, label: "Name" },
    { key: "age", required: false, label: "Age" },
    { key: "name", maxLength: 0, label: "name" },
    { key: "name", minLength: 0, label: "name" },
    { key: "age", minValue: 0, label: "Age" },
    { key: "age", maxValue: 60, label: "Age" }
  ];

  validator(
    formValue,
    rules,
    (errors: any): any => {
      console.log("Error");
    }
  );
  
  const initialFormState = { id: null, name: "", age: "" ,gender:""};
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  )
  const handleInputChange = (event:any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
        resetAddUser();
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Age</label>
      <input
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      />
      <label>Gender</label>
      <input
        type="text"
        name="gender"
        value={user.gender}
        onChange={handleInputChange}
      />
      <button>{props.editing ? "Update user" : "Add user"}</button>
      {props.editing && (
        <button onClick={resetAddUser}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;
