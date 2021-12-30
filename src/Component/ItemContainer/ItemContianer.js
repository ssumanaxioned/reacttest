import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, fetchAPI } from '../../Actions';
import Item from '../Item/Item';

function ItemContianer() {

  const dispatch = useDispatch();
  const {filter, isLoading} = useSelector(state => state.apiReducer)

  useEffect(() => {
    dispatch(fetchAPI('https://fakestoreapi.com/products'))  
  }, [])

  return (
    <>
      {
        isLoading ? null : (
          filter.map(item=> (
            <Item key={item.id} title={item.title} id={item.id} image={item.image} price={item.price} handleChange={addToCart} name={'Add to cart'} />
          ))
        )
      }
    </>
  )
}

export default ItemContianer
