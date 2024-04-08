import { cartActions } from "@/app/_redux/slices/cartSlice";
import { useAppDispatch } from "@/app/_redux/store";
import React from "react";

const CartItem = (props: IProps) => {
  const dispatch = useAppDispatch();
  const { data } = props;

  const incrementHandler = () => {
    dispatch(cartActions.addToCart(props.data));
  };

  const decrementHandler = () => {
    dispatch(cartActions.removeFromCart(props.data));
  };

  return (
    <div>
      <div className="card p-2">
        <p>
          <strong>Name : </strong> <span>{data.name}</span>
        </p>
        <p>
          <strong>Description : </strong> <span>{data.description}</span>
        </p>
        <p>
          <strong>Price : </strong> <span>{data.price}</span>
        </p>
        <p>
          <strong>Quantity : </strong> <span>{data.quantity}</span>
        </p>

        <div className="d-flex gap-3">
          <button className="btn btn-success" onClick={incrementHandler}>
            Increment
          </button>
          <button className="btn btn-warning" onClick={decrementHandler}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

type IProps = {
  data: ICartItem;
};
