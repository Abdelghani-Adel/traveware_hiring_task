import React, { useState } from "react";
import {
  FaSortAlphaDown,
  FaSortAlphaUpAlt,
  FaSortNumericDown,
  FaSortNumericUpAlt,
} from "react-icons/fa";

const SortingActions = (props: IProps) => {
  const [nameOrder, setNameOrder] = useState<ISortDirection | null>();
  const [priceOrder, setPriceOrder] = useState<ISortDirection | null>();

  const handleNameSort = () => {
    if (!nameOrder) {
      setNameOrder("asc");
      props.sortName("asc");
    } else {
      props.sortName(nameOrder === "asc" ? "desc" : "asc");
      setNameOrder(nameOrder === "asc" ? "desc" : "asc");
    }
  };

  const handlePriceSort = () => {
    if (!priceOrder) {
      setPriceOrder("asc");
      props.sortPrice("asc");
    } else {
      props.sortPrice(priceOrder === "asc" ? "desc" : "asc");
      setPriceOrder(priceOrder === "asc" ? "desc" : "asc");
    }
  };

  return (
    <div className="d-flex gap-3">
      <button className="btn btn-warning" data-testid="sortByNameBtn" onClick={handleNameSort}>
        Sort By Name{" "}
        {nameOrder && (nameOrder === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUpAlt />)}
      </button>
      <button className="btn btn-warning" data-testid="sortByPriceBtn" onClick={handlePriceSort}>
        Sort By Price{" "}
        {priceOrder && (priceOrder === "asc" ? <FaSortNumericDown /> : <FaSortNumericUpAlt />)}
      </button>
    </div>
  );
};

export default SortingActions;

type IProps = {
  sortName: (direction: ISortDirection) => void;
  sortPrice: (direction: ISortDirection) => void;
};
