import styles from './Posts.module.scss'
import PostForm from "../../components/PostForm/PostForm";
import PostList from "../../components/PostList/PostList";
import { TPost } from "../../components/PostItem/PostItem";
import { useEffect, useState } from "react";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/Modal/Modal";
import PostFilter from "../../components/PostFilter/PostFilter";
import { TFilter } from "../../types/types";
import { usePost } from "../../hooks/usePost";
import { fetchPosts } from "../../api/appApi";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/UI/Loader/Loader";
import { getPageCount } from "../../utils/pages";
import { usePagination } from "../../hooks/usePagintion";
import Pagination from "../../components/UI/Pagination/Pagination";
// todo Создать слайсы
const Posts = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [filter, setFilter] = useState<TFilter>({ sort: "", query: "" });
  const [posts, setPosts] = useState<TPost[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const [getPosts, isLoading, error] = useFetch(async () => {
    const posts = await fetchPosts(limit, page);
    setPosts(posts.data);
    const totalCount = posts.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const pagesArray = usePagination(totalPages);
  // console.log(pagesArray);
  useEffect(() => {
    getPosts();
  }, [page]);

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

  const changePage = (page:number) => {
    setPage(page)
  } 
  console.log(page)
  return (
    <div className={styles.posts}>

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
      <Pagination setPage={changePage} pagesArray={pagesArray} currentPage={page}/>
    </div>
  );
};

export default Posts;
