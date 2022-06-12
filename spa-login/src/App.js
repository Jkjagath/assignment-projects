import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>} />    
      <Route path='/Login' element={<Login/>} /> 
      <Route path='/SignUp' element={<SignUp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
