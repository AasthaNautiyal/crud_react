import React from 'react';
import './App.css';
import { useState } from 'react';
import { IUser } from './components/interface';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const App = () => {
  const usersData: Array<IUser> = [];
  const initialFormState = { id:0, name: "", age:0 ,gender:" "};

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user:IUser)=> {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id:any) => {
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
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>{editing ? "Edit user" : "Add user"}</h2>
            <UserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
