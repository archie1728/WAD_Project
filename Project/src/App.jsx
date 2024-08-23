// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CarDetailsPage from './CarDetailsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/car-details" element={<CarDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
