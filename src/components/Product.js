import React from 'react';
import { Card } from 'react-bootstrap';
import Ratings from './Ratings';

import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className="rounded my-3 p-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Ratings
          value={product.rating}
          color='gold'
          text={`${product.numReviews} avaliações`}></Ratings>
      </Card.Body>
    </Card>
  )
}

export default Product
