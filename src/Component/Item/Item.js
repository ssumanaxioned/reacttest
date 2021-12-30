import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './item.css';

function Item(props) {
  const dispatch = useDispatch();

  const {id, title, image, price, handleChange, name} = props
  return (
    <div className='item_details'>
        {/* <Link to={{pathname: `/details/${title}`, state: id }}>Details</Link> */}
        <h2>{title}</h2>
        <img src={image} alt="item" />
        <div className='details'>
          <p>Price: ${price}</p>
          <button onClick={()=> dispatch(handleChange(id))}>{name}</button>
        </div>
      </div>
  )
}

export default Item
