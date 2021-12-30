import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { removeFromCart } from '../../Actions';
import Item from '../../Component/Item/Item';
import './cartitems.css';

function CartItems() {
  // const products = JSON.parse(localStorage.getItem('product'))
  const [products, setProducts] = useState([])
  // const filtered = products.map(id => data.filter(item => item.id === id))
  // const {filtered} = useSelector(state => state.apiReducer)
  const [filtered, setFiltered] = useState([])
  const { data } = useSelector(state => state.apiReducer)
  const { url } = useRouteMatch();

  const removeCart =(value)=>{
    setProducts(prevs=> prevs.filter(item => item !== value))
}

  useEffect(()=> {
    if(localStorage.getItem('product')){
      setProducts(JSON.parse(localStorage.getItem('product')))
    }
  }, [])

  useEffect(() => {  
    localStorage.setItem('product', JSON.stringify(products))
    setFiltered(products.map(id => data.filter(item => item.id === id)))
  }, [products, filtered])

  return (
    <>
      <Link className='button' to={{ pathname: `${url}/placeorder` }}>PlaceOrder</Link>
      <div className='cartitems'>
        {
          filtered.map(item => (
            <Item key={item[0].id} title={item[0].title} id={item[0].id} image={item[0].image} price={item[0].price} handleChange={removeCart} name={'Remove'} />
          ))
        }
      </div>
    </>
  )
}

export default CartItems
