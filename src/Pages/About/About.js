import React from 'react'
import { useSelector } from 'react-redux'

function About() {

  const { isLoading, data } = useSelector(state => state.apiReducer)

  const listing = data.map(product => {
    return (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    )
  })

  return (
    <div>
      {isLoading ? null : listing}
    </div>
  )
}

export default About
