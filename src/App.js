import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BurgerBuilder from './Page/BurgerBuilder';
import Login from './Page/Login';
import Header from './Components/Header/header';

function App() {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
          <Route path="/burger" element={<BurgerBuilder/>}/>
          <Route path="/login" element={<Login/>}/>
          
        </Routes>
    </BrowserRouter>
      
  );
}

export default App;