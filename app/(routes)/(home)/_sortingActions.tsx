import React, { useState } from "react";

const SortingActions = (props: IProps) => {
  const [nameOrder, setNameOrder] = useState<ISortDirection>("asc");
  const [priceOrder, setPriceOrder] = useState<ISortDirection>("asc");

  const handleNameSort = () => {
    props.sortName(nameOrder);
    setNameOrder(nameOrder === "asc" ? "desc" : "asc");
  };

  const handlePriceSort = () => {
    props.sortPrice(priceOrder);
    setPriceOrder(priceOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="d-flex gap-3">
      <button className="btn btn-warning" onClick={handleNameSort}>
        Sort By Name
      </button>
      <button className="btn btn-warning" onClick={handlePriceSort}>
        Sort By Price
      </button>
    </div>
  );
};

export default SortingActions;

type IProps = {
  sortName: (direction: ISortDirection) => void;
  sortPrice: (direction: ISortDirection) => void;
};
