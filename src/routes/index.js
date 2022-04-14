import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Tests from '../pages/Tests';

// import { Container } from './styles';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tests" element={<Tests />} />
    </Routes>
  );
}

export default Router;
