import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart} = useSelector(store => store)

  const handleCheckOut = () => {
    navigate("/checkout?step=2")
  }

  useEffect(() => {
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border ">
            <p className="uppercase font-bold opacity-70 pb-4">Price detail</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Giá</span>
                <span>{cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Giảm giá</span>
                <span>{cart.cart?.discounte}</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Vận chuyển</span>
                <span className=" text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 font-bold ">
                <span>Tổng</span>
                <span>{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
            onClick={handleCheckOut}
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "1rem", py: ".7rem" }}
            >
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
