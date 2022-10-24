import React from 'react';
import '../style/App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Navbar, Home, About, Portfolio, Footer} from './index'


const App = () => {
    return (
        <div className='app-container'>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
            </Routes>
            <Footer/>
        </div>
        
    )
}

export default App;