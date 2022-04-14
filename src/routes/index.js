import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

// import { Container } from './styles';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
