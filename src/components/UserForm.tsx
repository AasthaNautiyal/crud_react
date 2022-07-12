import React, { useState, useEffect } from "react";
import validator from "./validator";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import "../App.css";
import { makeStyles } from '@material-ui/core/styles';
import { IUser } from "./interface";

const useStyles = makeStyles({
  formStyle: {
      fontFamily: 'Playfair Display',
      fontWeight: 500,
      border: "none",
      borderRadius: 8,
      margin: 10,
      display: "flex",
      flexDirection: "column",
  },
  btnStyle: {
    display: "flex",
    margin:10,
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "column",
},
})
interface IProps {
  editing:boolean;
  currentUser:IUser;
  setEditing:React.Dispatch<React.SetStateAction<boolean>>;
  updateUser: (id: number, newUser: IUser) => void;
  addUser: (user: IUser) => void;
}

const UserForm :React.FunctionComponent<IProps>=props => {

    const initUser = { id:0, name: "", age: 0 ,gender: ""};
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
  
  const initialFormState = { id: 0, name: "", age: 0,gender: ""};
  const [user, setUser] = useState(
    props.editing ? props.currentUser : initialFormState
  )
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });

  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

/* const resetAddUser = () => {
    props.setEditing(false);
    setUser(initialFormState);
    props.setCurrentUser(initialFormState);
  };
  */

  const classes = useStyles();
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.editing ? props.updateUser(user.id, user) : props.addUser(user);
      }}
    >
      <div className={classes.formStyle}>
      <TextField
        label="Name" variant="filled" id="filled-size-small" size="small"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      /></div><br></br>
      <div className={classes.formStyle}>
      <TextField
      label="Age" variant="filled" id="filled-size-small" size="small"
        type="text"
        name="age"
        value={user.age}
        onChange={handleInputChange}
      /></div><br></br>
      <div className={classes.formStyle}>
      <TextField
      label="Gender" variant="filled" id="filled-size-small" size="small"
      type="text"
      name="gender"
      value={user.gender}
      onChange={handleInputChange}></TextField>
      </div><br></br>
      <div className={classes.btnStyle}>
      <button>{props.editing ? "Update user" : "Add user"}</button>
     
      </div>
    </form>
  );
};

export default UserForm;
