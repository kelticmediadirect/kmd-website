import React from 'react';
import Link from 'gatsby-link';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button
} from 'reactstrap';

import styles from './ProductCard.module.css';

const ProductCard = ({ name, price, imageSrc, slug }) => {
  return (
    <Card className={`mb-5 ${styles.card}`} body>
      <CardImg top height="100%" src={imageSrc} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>£{price}</CardText>
        <Link to={`/products/${slug}`}><Button color="primary">View Product</Button></Link>
      </CardBody>
    </Card>
  );
};

export default ProductCard;