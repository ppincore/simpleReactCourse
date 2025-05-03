import React from 'react';
import Posts from '../../pages/Posts/Posts';
import NotFound from '../../pages/notFound/NotFound';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path='/posts' element={<Posts/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  );
};

export default App;