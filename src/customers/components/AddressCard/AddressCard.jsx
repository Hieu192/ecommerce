import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address?.firstName + " " + address?.lastName}</p>
        <p>{address?.state}, {address?.streetAddress}, {address?.zipcode}</p>
        <div>
          <p className='font-semibold'>Số điện thoại</p>
          <p>{address?.phone}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard