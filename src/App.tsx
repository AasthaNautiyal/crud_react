import React, { Component, useState } from 'react';
import AddUser from './AddUser';
import TodoItem from './TodoItem';

function App() {
  
  return(
      <div>
        <h1>CRUD</h1>
        <AddUser/>
        <TodoItem/>
      </div>
  )
}

export default App;
