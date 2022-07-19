import React from 'react';
import AddUser from './AddUser';
import DisplayUser from './DisplayUser';
import "./App.css";
function App() {
  
  return(
      <div className='container'> 
        <h1>CRUD</h1>
        <AddUser/>
        <DisplayUser/>
     </div>
  )
}

export default App;
