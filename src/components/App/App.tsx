import styles from "./App.module.scss";
import PostForm from "../PostForm/PostForm";
import PostList from "../PostList/PostList";
import { TPost } from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";
import PostFilter from "../PostFilter/PostFilter";
import { TFilter } from "../../types/types";
import { usePost } from "../../hooks/usePost";
import { fetchPosts } from "../../api/appApi";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../UI/Loader/Loader";

// todo Создать слайсы
const App = () => {
  const [getPosts, isLoading, error] = useFetch(async () => {
    const posts = await fetchPosts();
    setPosts(posts);
  });
  const [posts, setPosts] = useState<TPost[]>([]);
  useEffect(() => {
    getPosts();
  }, []);

  // async function getPosts() {}
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
      {error && <h1>{error}</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <PostList
          title={"Список постов"}
          posts={sortedAndSearchedPost || null}
          remove={deletePost}
        />
      )}
    </div>
  );
};

export default App;
