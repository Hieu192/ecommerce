import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/hinh-nen-anime-cute-1.jpg' alt=''/>
                    <div className='ml-5 space-y-2'>
                        <p>Anime</p>
                        <p className='opacity-50 text-xs font-semibold '>size: L</p>
                        <p className='opacity-50 text-xs font-semibold '>color: red</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>1000 đ</p>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p>
                <AdjustIcon sx={{width:"15px ", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Giao hàng vào ngày 1 tháng 4
                    </span>
                </p>
                <p className='text-xs'>
                    Mặt hàng của bạn đã được vận chuyển
                </p>
                </div>}
                {false && <p>
                    <span>
                        Dự kiến giao hàng vào ngày 1 tháng 4
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard