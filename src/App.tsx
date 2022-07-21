import React from 'react';
import Form from "./components/Form";
import DisplayUser from "./components/DisplayUser";
import './App.css';
import {Model,UserContext} from "./context/userContext";

function App() {
  const User=Model();
  return (
    <div className='container'>
      <h1>CRUD</h1>
      <UserContext.Provider value={User}>
      <Form/>
      <DisplayUser/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
