import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import AppNavbar from './AppNavBar';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
