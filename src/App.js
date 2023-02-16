import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Common/Header';
import Home from './Components/Pages/Home';
import BannerDest from './Components/BannerDest';
import Digital from './Components/Digital';
import Drops from './Components/Drops';
import What from './Components/What';
import Collection from './Components/Collection';
import Navbar from './Components/Navbar';
import Footer from './Components/Common/Footer';
import { Link, BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
  
     <Header />

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/bannerDest" element={<BannerDest />} />
       <Route path="/digita" element={<Digital />} />
       <Route path="/drops" element={<Drops />} />
       <Route path="/what" element={<What />} />
       <Route path="/collection" element={<Collection />} />
       <Route path='/navbar' element={<Navbar/>}></Route>
       </Routes>
       <Footer />
       </BrowserRouter>

    </div>
  );
}

export default App;
