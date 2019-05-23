import React from 'react';
import { Link } from 'gatsby';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const BlogMain = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Row className="py-5">
        <Col sm={12} md={12} lg={12}>
          <h1>News from Keltic Media Direct</h1>
        </Col>
      </Row>
      <Row>
        {data.blogPosts.edges.map(({ node }) => (
          <Col lg={12} key={node.name}>
            <h2>{node.name}</h2>
            <p>{node.date.split('T')[0]}</p>
            <Link to={`/blog/${node.slug}`}>Read More...</Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogMain;
