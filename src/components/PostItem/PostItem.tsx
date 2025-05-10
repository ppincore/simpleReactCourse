import React, { FC } from "react";
import Button from "../UI/Button/Button";
import styles from "./PostItem.module.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

type TPostItemProps = {
  post: TPost;
  number: number;
  remove: (post: TPost) => void;
};

export type TPost = {
  id: string;
  title: string;
  body: string;
};

const PostItem: FC<TPostItemProps> = (props: TPostItemProps) => {
  const { post, number, remove } = props;
  const router = useNavigate()
  const location = useLocation()
  console.log(router, location)
  return (
    <div className={styles.post}>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className={styles.buttons_wrapper}>
        <Button className={styles.button} onClick={() =>{}}>
          Открыть
        </Button>
        <Button className={styles.button} onClick={() => remove(post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
