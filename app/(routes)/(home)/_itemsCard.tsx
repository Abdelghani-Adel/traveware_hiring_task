import { cartActions } from "@/app/_redux/slices/cartSlice";
import { useAppDispatch } from "@/app/_redux/store";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

const ItemCard = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { name, description, price } = props.data;

  const addToCart = () => {
    dispatch(cartActions.addToCart(props.data));
  };

  return (
    <div>
      <div className="card p-2">
        <p>
          <strong>Name : </strong> <span>{name}</span>
        </p>
        <p>
          <strong>Description : </strong> <span>{description}</span>
        </p>
        <p>
          <strong>Price : </strong> <span>{price}</span>
        </p>
        <button className="btn btn-success" onClick={addToCart}>
          <MdAddShoppingCart /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

type IProps = {
  data: IItem;
};
