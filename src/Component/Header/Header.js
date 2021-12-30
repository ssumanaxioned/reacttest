import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import './header.css'
import LoginButton from '../LoginButton'
import Search from '../Search/Search'

function Header() {

  return (
    <nav>
      <Search />
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
