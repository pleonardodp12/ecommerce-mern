import React from 'react';
import Rating from '../components/Rating';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


const Product = ({ product }) => {

  return (
    <Card className='rounded my-3 p-3'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top'></Card.Img>
      </Link>
      <Card.Body>
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </LinkContainer>

        <Rating
          value={product.rating}
          text={`${product.numReviews} avaliações`}
          color='gold'
        ></Rating>
      </Card.Body>
    </Card>
  );
};

export default Product;