import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider({images, activeIndex, onSelect}) {
  const imageStyle = {
    width: "100%", // Set the desired width
    height: '300px', // Set the desired height
    objectFit: "fill", // Ensures images are resized to cover the dimensions without distortion
  };

  return (
    <Carousel data-bs-theme="dark" activeIndex={activeIndex} onSelect={onSelect}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block"
            src={image.src}
            alt={image.alt || `Slide ${index}`}
            style={imageStyle}
          />
          {image.caption && (
            <Carousel.Caption>
              <h4 style={{"color":"#523904"}}>{image.caption.title}</h4>
              <p style={{"background-color":"#6f9bc061", "border-radius":"25px", "color":"#0c2f50"}}><b>{image.caption.description}</b></p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselSlider;