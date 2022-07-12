import React from 'react';
import { useState } from 'react';
import { IUser } from './components/interface';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  formStyle: {
      fontFamily: 'Playfair Display',
      width: "100%",
      border: "none",
      backgroundColor:'#e0f2f1',
      display: "flex",
     flexDirection: "column",
      alignItems:"center",
  },
  headStyle:{
    fontFamily: 'Playfair Display',
    backgroundColor: '#b2dfdb',
    alignItems:'center',
    display: "flex",
    flexDirection: "column",
    }
})

const App = () => {
  const usersData: Array<IUser> = [{id:0,name:" ",age:0,gender:""}];
  const initialFormState = { id:0, name: "", age:0,gender:""};

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user:IUser)=> {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id:number) => {
    setEditing(false);
    setUsers(users.filter(user => user.id !==id));
  };
 
  const editRow = (user:IUser) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (id: number, newUser: IUser) => {
    setEditing(false);
    setUsers(users.map(i => (i.id === id ? newUser : i)));
  };
  const classes = useStyles();
  return (
    <div>
     <h1 className={classes.headStyle}>CRUD App</h1>
      <div className={classes.formStyle}>
        <div>
          <div>
            <h2>{editing ? "Edit user" : "Add user"}</h2>
            <UserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              //setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
