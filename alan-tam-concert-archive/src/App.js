import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Concert1986 from './Concert1986';
import Concert1991 from './Concert1991';
import Concert1994 from './Concert1994';
import './App.css'; // 用于存放全局页面切换动画

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/concert/1986" element={<Concert1986 />} />
                <Route path="/concert/1991" element={<Concert1991 />} />
                <Route path="/concert/1994" element={<Concert1994 />} />
            </Routes>
        </Router>
    );
}

export default App;