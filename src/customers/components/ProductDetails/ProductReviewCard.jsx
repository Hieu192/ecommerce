import React from "react";
import { Button, Grid, Box, Avatar, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar className="text-white" sx={{width:56, height:56 }}>H</Avatar>
          </Box>
        </Grid>
        <Grid xs={9}>
            <div className="space-y-2">
                <div >
                    <p className="font-semibold text-lg">Hieu</p>
                    <p className="opacity-50">ngay thang nam</p>
                </div>
            </div>
            <Rating value={4} name="half-rating" readOnly precision={.5}></Rating>
            <p>comment</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
