import { TPost } from "../components/PostItem/PostItem";

export type TFilter = {
  sort: keyof Omit<TPost, "id">;
  query: string;
};
