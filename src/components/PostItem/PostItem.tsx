import React, { FC } from "react";
import Button from "../UI/Button/Button";
import styles from "./PostItem.module.scss";

type TPostItemProps = {
  post: TPost;
  number: number;
  remove: (post: TPost) => void;
};

export type TPost = {
  id: string ;
  title: string;
  body: string;
};


const PostItem: FC<TPostItemProps> = (props: TPostItemProps) => {
  const { post, number, remove } = props;
  return (
    <div className={styles.post}>
      <div>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div>
        <Button className={styles.button__delete} onClick={()=>remove(post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default PostItem;
