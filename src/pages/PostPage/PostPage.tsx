import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../api/appApi";
import { TPost } from "../../components/PostItem/PostItem";
import { useFetch } from "../../hooks/useFetch";

import Loader from "../../components/UI/Loader/Loader";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState<TPost | null>(null);
  const [comments, setComments] = useState()
  const [fetchPost, isLoading, error] = useFetch(async () => {
    const response = await fetchPostById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isLoadingComents, commentsError] = useFetch(async () => {
    const response = await fetchPostById(params.id);
    setPost(response.data);
  });

  useEffect(() => {
    if (params.id) {
      fetchPost();
    } else{
      throw Error(error)
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div>
            <div>ПОСТ {post?.id}</div>
            <div>{post?.title}</div>
            <div>{post?.body}</div>
            <div></div>
          </div>
        </>
      )}
      <h1>Комментарии</h1>
    </>
  );
};

export default PostPage;
