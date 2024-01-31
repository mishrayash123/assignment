import { Route, Routes, BrowserRouter  } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import './App.css';
import Footer from './Components/Footer';
import Product from './Components/Services/Product';
import Notfound from "./Components/Notfound"




function App() {

  
  return (
    <div>
      <Navbar />
<BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/product' element={<Product />}></Route>
       <Route path="*" element={<Notfound />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

