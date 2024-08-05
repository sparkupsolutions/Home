import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider({images, activeIndex, onSelect}) {
  const w = window.innerWidth < 1000 ? "mob" : "desk"
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
            w === "mob"?
            <Carousel.Caption>
              <p style={{
                    "backgroundColor":"#6f9bc061", 
                    "borderRadius":"25px", 
                    "color":"black",
                    "fontSize":"smaller",
                    }}>{image.caption.description}</p>
                <p style={{
                  "backgroundColor":"#f9a72b", 
                    "borderRadius":"25px",
                "color":"black",
                "fontSize":"smaller",
                "fontWeight":"bold",
                }}>{image.caption.title}</p>
            </Carousel.Caption>:
           <Carousel.Caption>
              <p style={{"backgroundColor":"#6f9bc061", "borderRadius":"25px", "color":"#0c2f50"}}><b>{image.caption.description}</b></p>
              <h4 style={{"color":"#523904"}}>{image.caption.title}</h4>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselSlider;