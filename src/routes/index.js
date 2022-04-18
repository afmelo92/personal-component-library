import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Tests from '../pages/Tests';

// import { Container } from './styles';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
