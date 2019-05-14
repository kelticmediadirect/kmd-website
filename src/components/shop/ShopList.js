import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import ProductCard from '../ProductCard';
import Filter from './Filter';

class ShopList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: this.props.data.allContentfulProduct.edges,
      category: 'All',
      sortBy: 'name-asc'
    };

    this.setCategory = this.setCategory.bind(this);
    this.setSortBy = this.setSortBy.bind(this);
    this.filterProducts = this.filterProducts.bind(this);
  }

  setCategory(category) {
    this.setState({ category: category });
  }

  setSortBy(sortBy) {
    this.setState({ sortBy: sortBy });
  }

  filterProducts(category, sort) {
    const products = this.state.products.filter(product => (
      product.node.tags.includes(category) || category === 'All'
    ));

    if(sort === 'price-asc') {
      products.sort((a, b) => (
        a.node.price - b.node.price
      ));
    }

    if(sort ==='price-desc') {
      products.sort((a, b) => (
        a.node.price - b.node.price
      ));
      products.reverse();
    }

    if(sort === 'name-asc') {
      products.sort((a, b) => (
        a.node.albumName > b.node.albumName
      ))
    }

    if(sort === 'name-desc') {
      products.sort((a, b) => (
        a.node.albumName < b.node.albumName
      ))
    }
    
    return products;
  };

  render() {
    const { category, sortBy } = this.state;
    const products = this.filterProducts(category, sortBy);

    return (
      <Container>
        <Row>
          <Col md={3}>
          <Filter setCategory={this.setCategory} setSortBy={this.setSortBy}/>
          </Col>
          <Col md={9}>
            <Container>
              <Row>
                {products.map((product, index) => (
                  <Col key={index} lg={4} md={6}>
                    <ProductCard
                      name={product.node.albumName}
                      price={product.node.price}
                      imageSrc={product.node.image.resize.src}
                      slug={product.node.slug}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ShopList;
