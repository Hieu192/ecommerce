import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
// import { StarIcon } from "@heroicons/react/24/outline";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Địa chỉ giao hàng</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
      {[1,1,1,1,1].map(() => <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-5">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://i.pinimg.com/736x/6d/75/b2/6d75b207f2a5029d94163c15994dc2bc.jpg"
                alt=""
              />

              <div className="space-y-2 ml-5">
                <p className="font-semibold">anime dep</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>color: pink</span> <span>Size: L</span>
                </p>
                <p>Seller</p>
                <p>10000đ</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:deepPurple[500]}}>
              <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl" />
              <span>
                đánh giá & bình luận sản phẩm
              </span>
            </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
