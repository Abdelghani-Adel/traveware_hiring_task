import React from "react";
import ItemCard from "./_itemsCard";
import { v4 } from "uuid";

const ItemList = (props: IProps) => {
  if (!props.data) return null;

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
      {props.data.map((item) => (
        <ItemCard key={v4()} data={item} />
      ))}
    </div>
  );
};

export default ItemList;

type IProps = {
  data: IItem[];
};
