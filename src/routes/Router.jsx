import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Research from '../pages/Research';
import Result from '../pages/Result';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/notFound" element={<NotFound />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/pesquisa" element={<Research />} />
      <Route exact path="/resultado" element={<Result />} />
    </Routes>
  );
}
