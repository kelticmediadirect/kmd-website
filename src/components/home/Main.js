import React from 'react';
import {
  Button,
  Container,
  Row,
  Col
} from 'reactstrap';

import ServiceLink from './ServiceLink';
import ProductCard from '../ProductCard';

import styles from './Main.module.css';

const Main = (props) => {
  const { servicePublish, serviceCD, serviceRadio, productLists } = props;

  return (
    <Container fluid>
      <Row>
        <Col md={7} lg={8} xl={9}>
          <h1 className={`${styles.title} mt-5`}>Featured Products</h1>
          <hr className="bg-primary w-25 mx-0 d-none d-md-block"/>
          <hr className="bg-primary w-75 d-md-none"/>
          <Row>
            {productLists.edges[0].node.featuredProducts.map((product, index) => (
              <Col key={index} sm={6} md={6} lg={4}>
                <ProductCard 
                  name={product.albumName}
                  price={product.price}
                  imageSrc={product.image.resize.src}
                  slug={product.slug}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="px-0" md={5} lg={4} xl={3}>
          <ServiceLink image={serviceCD} name="Manufacturing" />
          <ServiceLink image={servicePublish} name="Publishing" />
          <ServiceLink image={serviceRadio} name="Radio & Promotion" />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
