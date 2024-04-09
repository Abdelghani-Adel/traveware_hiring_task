"use client";
import { cartActions } from "@/app/_redux/slices/cartSlice";
import { loaderActions } from "@/app/_redux/slices/loaderSlice";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const cartState = useAppSelector((state) => state.cart);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loaderActions.showLoadingOverlay());

    setTimeout(() => {
      dispatch(loaderActions.hideLoadingOverlay());
      dispatch(cartActions.checkout());
      toast.success("You order has been placed successfully");
      router.push("/");
    }, 3000);
  };

  return (
    <main>
      <div className="container py-4">
        <form onSubmit={submitHandler}>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 col-xxl-4">
              <div className="d-flex flex-column gap-3 border p-3 rounded-3">
                <h5>Contact Details</h5>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Enter your phone number"
                  required
                />
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Enter your email"
                  required
                />

                <h5>Billing Details</h5>
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Card Number"
                  required
                />
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="MM / YY"
                  required
                />
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="CVV"
                  required
                />
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Name on card"
                  required
                />
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="ZIP / Postal"
                  required
                />

                <button className="btn btn-success">
                  Purchase <strong>({cartState.totalPrice.toFixed(2)} EGP)</strong>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
