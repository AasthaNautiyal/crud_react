import './App.css';
import { UserContext, Model} from './context/userContext'
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import SingleUser from './components/SingleUser';


const App= () => {
  const User= Model();
  return (
    <div className='container'>
      <h1>CRUD</h1>
      <UserContext.Provider value={User}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='user/:id' element={<SingleUser />} />
        </Routes>
      </UserContext.Provider>
    </div >
  )
}

export default App;