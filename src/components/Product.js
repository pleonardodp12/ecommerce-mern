import React from 'react';

import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  return (
    <Card className="rounded my-3 p-3">
      <Card.Img src={product.image} variant="top"></Card.Img>
      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as="div">
          <div className="my-3">
            {product.rating} de {product.numViews} avaliações
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
