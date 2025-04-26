import { TPost } from "../components/PostItem/PostItem";
import { useMemo } from "react";

type TuseSortedPost = {
  posts: TPost[];
  sort: keyof TPost;
};

type TusePostProps = {
  query: string;
} & TuseSortedPost;

export const useSortedPost = (props: TuseSortedPost) => {
  const { posts, sort } = props;
  const sortedPosts = useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => {
          return a[sort].localeCompare(b[sort]);
        })
      : posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePost = (props: TusePostProps) => {
  const { posts, sort, query } = props;
  const sortedPosts = useSortedPost({ posts, sort });
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPost;
};
