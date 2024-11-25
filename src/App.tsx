import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import HomePage from './pages/HomePage';
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
