import { P } from "react-router/dist/development/route-data-B9_30zbP";
import { TPost } from "../components/PostItem/PostItem";

export type TFilter = {
  sort: keyof Omit<TPost, "id"> | "";
  query: string;
};

export type TComment = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};
