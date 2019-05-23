import React from 'react';
import { Link } from 'gatsby';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

import styles from './MainCarousel.module.css';

class MainCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      length: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    this.setState({ length: this.props.headerItems.edges.length });
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { headerItems } = this.props;

    // Return a different link depending on what reference the node has
    // TODO Tidy up empty Link component
    const items = headerItems.edges.map(({ node }) => {
      if (node.shopReference) {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={node.name}
          >
            <Link to={`/products/${node.shopReference.slug}`}>
              <img src={node.image.resize.src} className={styles.image} alt={node.name} />
            </Link>
          </CarouselItem>
        )
      } else if (node.blogReference) {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={node.name}
          >
            <Link to={`/blog/${node.blogReference.slug}`}>
              <img src={node.image.resize.src} className={styles.image} alt={node.name} />
            </Link>
          </CarouselItem>
        )
      } else {
        // console.log("Node has no ref!");
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={node.name}
          >
            <Link to="">
              <img src={node.image.resize.src} className={styles.image} alt={node.name} />
            </Link>
          </CarouselItem>
        )
      }
    });    

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={4000}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {items}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    )
  }
}

export default MainCarousel;
