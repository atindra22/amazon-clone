import React from 'react'

function Product({id, rating, price, img}) {
  return (
    <div className='product'>
    <p>{id}</p>
    <p className='product__'>
      <small>$</small>
      <strong>price</strong>
    </p>
      
    </div>
  )
}

export default Product
