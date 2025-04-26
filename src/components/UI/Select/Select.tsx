import React, { ChangeEvent } from "react";
import { TPost } from "../../PostItem/PostItem";

export type TSelectOptions = {
  name: string;
  value: keyof Omit<TPost, "id">;
};

type TSelectProps = {
  options: TSelectOptions[];
  defaultVaue: string;
  value: string;
  onChange: (vlaue: keyof Omit<TPost, "id">) => void;
};

const Select = (props: TSelectProps) => {
  const { options, defaultVaue, value, onChange } = props;

  const handleChangeSelectOPtion = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as keyof Omit<TPost, "id">);
  };

  return (
    <select
      value={value}
      title="Отсортировать потсы"
      onChange={handleChangeSelectOPtion}
    >
      <option disabled >{defaultVaue}</option>
      {options.map((option: TSelectOptions) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
