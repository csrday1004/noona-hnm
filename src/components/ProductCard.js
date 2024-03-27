import React from 'react'

const ProductCard = ({data}) => {
  const choice = data.choice
  const img = data.img
  const isNew = data.new
  const title = data.title
  const price = data.price

  return (
    <div className='상품카드 product-card' style={{padding:'10px'}}>
      <img src={img} alt='제품이미지' style={{width:'100%'}}/>
      {choice?<div style={{color:'gray', fontSize:'11px'}}>Conscious choice</div>:null}
      <div>{title}</div>
      <div>₩{price.toLocaleString()}</div>
      {isNew?<small style={{color:'red'}}>신제품</small>:null}
    </div>
  )
}

export default ProductCard