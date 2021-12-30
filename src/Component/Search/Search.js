import React from 'react'
import { useDispatch } from 'react-redux';
import { filterProducts } from '../../Actions';
import './search.css'

function Search() {

  const dispatch = useDispatch();

  return (
    <>
      <input className='search' type="search" onChange={(e)=>dispatch(filterProducts(e.target.value))}/>
    </>
  )
}

export default Search
