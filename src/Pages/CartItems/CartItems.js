import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { removeFromCart } from '../../Actions';
import Item from '../../Component/Item/Item';
import './cartitems.css';

function CartItems() {
  const {products} = useSelector(state => state.selectedReducer)
  const { data } = useSelector(state => state.apiReducer)
  const filtered = products.map(id => data.filter(item => item.id === id))
  const {url} = useRouteMatch();

return (
  <div className='cartitems'>
    {
      filtered.map(item=> (
        <Item key={item[0].id} title={item[0].title} id={item[0].id} image={item[0].image} price={item[0].price} handleChange={removeFromCart} name={'Remove'} />
      ))
    }

    <Link to={{pathname: `${url}/placeorder`}}>PlaceOrder</Link>
  </div>
)
}

export default CartItems
