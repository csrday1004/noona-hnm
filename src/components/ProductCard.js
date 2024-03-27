import React from 'react'

const ProductCard = ({data}) => {

  const img = data.img
  const isNew = data.new
  const title = data.title
  const price = data.price

  return (
    <div className='상품카드 product-card' style={{border:'1px solid black'}}>
      <img src={img} alt='제품이미지' style={{width:'100%'}}/>
      <div>asdf</div>
      <div>{title}</div>
      <div>{price}</div>
      <div>{isNew}</div>
    </div>
  )
}

export default ProductCard