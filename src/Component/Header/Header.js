import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import './header.css'
import LoginButton from '../LoginButton'

function Header() {
  const {products} = useSelector(state => state.selectedReducer)
  
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <ul>
        <li className='cart'>
          <Link to='/cartitem'>
            <FaShoppingCart style={{fontSize: 36}}/>
            <p className='number'>{products.length}</p>
          </Link>
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  )
}

export default Header
