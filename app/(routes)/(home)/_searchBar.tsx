import React, { ChangeEvent } from "react";

const SearchBar = (props: IProps) => {
  const { onChange } = props;
  const onSearchByName = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name ..."
        data-testid="searchBar"
        onChange={onSearchByName}
      />
    </div>
  );
};

export default SearchBar;

type IProps = {
  onChange: (value: string) => void;
};
