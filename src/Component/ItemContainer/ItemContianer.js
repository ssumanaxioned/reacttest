import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI } from '../../Actions';
import Item from '../Item/Item';
import './container.css';

function ItemContianer() {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  const {filter, isLoading} = useSelector(state => state.apiReducer)

  const addCart =(value)=>{
      setProducts(prevs=> prevs.concat(value))
  }

  useEffect(()=> {
    dispatch(fetchAPI('https://fakestoreapi.com/products'))
    if(localStorage.getItem('product')){
      setProducts(JSON.parse(localStorage.getItem('product')))
    }
  }, [])

  useEffect(() => {  
    localStorage.setItem('product', JSON.stringify(products))
  }, [products])

  return (
    <>
      {
        products && <p>No. of products in Cart: {products.length}</p>
      }
      <div className="items">
      {
        isLoading ? null : (
          filter.map(item=> (
            <Item key={item.id} title={item.title} id={item.id} image={item.image} price={item.price} handleChange={addCart} name={'Add to cart'} />
          ))
        )
      }
      </div>
    </>
  )
}

export default ItemContianer
