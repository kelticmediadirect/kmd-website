import React from 'react';
/*----------------------------------------------------------------------------
  Importing Lightbox here causes errors when building the site as server tries
  to reference the non-existant window object. It must be imported in 
  componentDidMount as shown below.
  Example: https://github.com/zeit/next.js/issues/219
----------------------------------------------------------------------------*/
//let Lightbox;

class ImageBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
      lightBoxOpen: false
    };

    this.openLightBox = this.openLightBox.bind(this);
  }

  // componentDidMount() {
  //   try {
  //     this.Lightbox = require("react-image-lightbox");
  //     console.log(this.Lightbox);
  //     Lightbox = this.Lightbox.default;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  openLightBox(index) {
    this.setState({ lightBoxOpen: true, imageIndex: index });
  }

  render() {
    const { imageIndex, lightBoxOpen } = this.state;
    const { image } = this.props;

    return (
      <div className="d-flex flex-column">
        <div onClick={() => this.openLightBox(0)} className="w-100 p-5">
          <img src={image.resize.src} width="100%" />
        </div>
        {/* <div className="d-flex">
          {images.map((image, index) => (
            <div onClick={() => this.openLightBox(index)} key={index} className="p-4 border border-danger" style={{width: '33%'}}>
              <img src={image.resize.src} width="100%" />
            </div>
          ))}
        </div> */}
        
        {/* {lightBoxOpen && (
          <Lightbox 
            mainSrc={image.resize.src}
            nextSrc={image.resize.src}
            prevSrc={image.resize.src}
            onCloseRequest={() => this.setState({ lightBoxOpen: false })}
            onMoveNextRequest={() => {
              //this.setState({ imageIndex: (imageIndex + 1) % images.length });
            }}
            onMovePrevRequest={() => {
              //this.setState({ imageIndex: (imageIndex + images.length - 1) % images.length });
            }}
          />
        )} */}
        
      </div>
    );
  }
};

export default ImageBlock;