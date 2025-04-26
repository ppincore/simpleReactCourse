import styles from "./App.module.scss";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import { TPost } from "../PostItem/PostItem";
import { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";
import PostFilter from "../PostFilter/PostFilter";
import { TFilter } from "../../types/types";
import { usePost } from "../../hooks/usePost";

// todo Создать слайсы
const App = () => {
  const [posts, setPosts] = useState<TPost[]>([
    { id: "1", title: "А1", body: "дд" },
    { id: "2", title: "Б2", body: "гг" },
    { id: "3", title: "В3", body: "вв" },
    { id: "4", title: "Г4", body: "бб" },
    { id: "5", title: "Д5", body: "аа" },
  ]);

  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<TFilter>({ sort: "title", query: "" });

  const sortedAndSearchedPost = usePost({
    sort: filter.sort,
    query: filter.query,
    posts: posts,
  });

  const deletePost = (post: TPost) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const createPost = (newPost: TPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className={styles.app}>
      <Button onClick={() => setVisibleModal(!visibleModal)}>
        Написать пост
      </Button>
      <Modal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm create={createPost} title={"Создать пост"} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
      <PostList
        title={"Список постов"}
        posts={sortedAndSearchedPost || null}
        remove={deletePost}
      ></PostList>
    </div>
  );
};

export default App;
