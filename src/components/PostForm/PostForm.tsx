import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import style from "./PostForm.module.scss";
import { TPost } from "../PostItem/PostItem";
import { v4 as uuid } from 'uuid';

// todo Диспетчером закрывать окно модалки 

type TFormProps = {
  title: string;
  create: (post: TPost) => void;
};

const PostForm = (props: TFormProps) => {
  const { title, create } = props;
  const postStructure: TPost = { id: null, title: "", body: "" };
  const [post, setPost] = useState<TPost>(postStructure);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, body: e.target.value });
  };

  const addNewPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newPost: TPost = {
      ...post,
      id: uuid(),
    };

    if (post.title && post.body) {
      create(newPost);
      setPost(postStructure);
      console.log("Сработала функция");
    }
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <form className={style.form}>
        <Input placeholder="Название поста" onChange={handleTitleChange} className={style.input}/>
        <Input placeholder="Описание" onChange={handleBodyChange} className={style.input}/>
        <Button onClick={addNewPost} children={"Cоздать пост"}  className={style.button}/>
      </form>
    </div>
  );
};

export default PostForm;
