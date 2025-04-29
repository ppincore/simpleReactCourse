import React from "react";
import PostItem from "../PostItem/PostItem";
import { TPost } from "../PostItem/PostItem";
import styles from "./PostList.module.scss";

type TPostListProps = {
  posts?: TPost[];
  remove: (post: TPost) => void;
  title: string;
};

const PostList = (props: TPostListProps) => {
  const { posts, remove, title } = props;
  if (!posts.length) {
    return <h1 className={styles.title}>Посты не найдены</h1>;
  }
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
