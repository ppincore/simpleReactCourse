import React, { ChangeEvent } from "react";
import Separator from "../UI/Separator/Separator";
import Select, { TSelectOptions } from "../UI/Select/Select";
import Input from "../UI/Input/Input";
import { TFilter } from "../../types/types";
import { TPost } from "../PostItem/PostItem";

type TPostFilterProps = {
  filter: TFilter;
  setFilter: (filter: TFilter) => void;
};

const PostFilter = (props: TPostFilterProps) => {
  const { filter, setFilter } = props;
  const options: TSelectOptions[] = [
    { name: "by Name", value: "title" },
    { name: "by Description", value: "body" },
  ];
  const handeleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.target.value });
  };

  const handeleChangeSelect = (selectedSort: keyof Omit<TPost, "id">) => {
    setFilter({ ...filter, sort: selectedSort });
  };

  return (
    <div>
      <Input
        placeholder="Поиск"
        value={filter.query}
        onChange={handeleChangeFilter}
      />
      <Separator></Separator>
      <Select
        defaultVaue="Сортировать"
        value={filter.sort}
        options={options}
        onChange={handeleChangeSelect}
      />
    </div>
  );
};

export default PostFilter;
