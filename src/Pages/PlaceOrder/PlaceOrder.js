import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './placeorder.css'

function PlaceOrder() {
  const products = JSON.parse(localStorage.getItem('product'))
  const { data } = useSelector(state => state.apiReducer)
  const filtered = products.map(id => data.filter(item => item.id === id))

  const listing = filtered.map(item => {
    return (
      <div className='items'>
        <img src={item[0].image} alt="item" />
        <div className='details'>
          <Link to={{ pathname: `/details/${item[0].title}`, state: item[0].id }}>Details</Link>
          <h2>{item[0].title}</h2>
          <p>Price: ${item[0].price}</p>
        </div>
      </div>
    )
  })

  return (
    <div className='placeorder'>
      <h1>Your Order has been placed.</h1>
      {listing}
    </div>
  )
}

export default PlaceOrder
