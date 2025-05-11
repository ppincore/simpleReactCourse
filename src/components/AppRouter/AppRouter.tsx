import React from "react";
import Posts from "../../pages/Posts/Posts";
import NotFound from "../../pages/notFound/NotFound";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About/About";
import PostPage from "../../pages/PostPage/PostPage";
import Modal from "../Modal/Modal";
const AppRouter = () => {
  return (
    <Routes>
      <Route path = '/posts' element={<Posts/>}/>
      <Route path="/posts/:id" element={<PostPage />}/>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
