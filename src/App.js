import './App.css';
import Header from './Components/Header/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from './Page/BurgerBuilder';
import Login from './Page/Login';
import Regsiter from './Page/Register';
import Checkout from './Page/checkout';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<BurgerBuilder/>}/>
          <Route path="/vg" element={<BurgerBuilder/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Regsiter/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        
    </BrowserRouter>
      
  );
}

export default App;