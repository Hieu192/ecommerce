import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store => store)
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")

  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
      <AddressCard address={order.order?.shippingAddress}/>
    </div>

    <div>
      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
          {order.order?.orderItems.map((item) => (
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
                <span>{order.order?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3">
                <span>Giảm giá</span>
                <span>{order.order?.discounte}</span>
              </div>

              <div className="flex justify-between pt-3 ">
                <span>Vận chuyển</span>
                <span className=" text-green-600">Free</span>
              </div>

              <div className="flex justify-between pt-3 font-bold ">
                <span>Tổng</span>
                <span>{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
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
    </div>

    
  )
}

export default OrderSummary