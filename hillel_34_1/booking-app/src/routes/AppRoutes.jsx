import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Main/MainPage';
import AboutPage from '../pages/About/AboutPage';
import HotelsPage from '../pages/Hotels/HotelsPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/hotels" element={<HotelsPage />} />
  </Routes>
);

export default AppRoutes;