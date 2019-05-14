import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import {
  Button
} from 'reactstrap';

import styles from './ServiceLink.module.css';

const ServiceLink = ({ image, name }) => {
  return (
    <div className={`position-relative`}>
      <div className={`${styles.content} text-light`}>
        <h2>{name}</h2>
        <hr className="bg-light w-50" />
        <Link to="/services"><Button color="success">Read More</Button></Link>
      </div>
      <Img 
        outerWrapperClassName={`h-100`}
        sizes={image.childImageSharp.sizes}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ServiceLink;
