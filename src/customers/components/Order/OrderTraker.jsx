import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Đặt hàng", 
    "Xác nhận đặt hàng",
    "Đã vận chuyển",
    "Chờ nhận hàng",
    "Đã nhận hàng"
]

const OrderTraker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => <Step>
                <StepLabel sx={{color: "", fontSize:"44px"}}>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTraker