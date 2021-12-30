import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router';
import { addToCart } from '../../Actions';
import './itemdetails.css';

function ItemDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.apiReducer);
  const filter = data.filter(item => item.id === location.state)

  const listing = filter.map(item => {
    return (
      <>
        <img className='img_detail' src={item.image} alt="item" />
        <div className='content'>
          <h2>{item.title}</h2>
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <p>Rating: {item.rating.rate}</p>
          <p>Price: ${item.price}</p>
          <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
        </div>
      </>
      )
  })

  return (
    <div className='item'>
      {listing}
    </div>
  )
}

export default ItemDetails
