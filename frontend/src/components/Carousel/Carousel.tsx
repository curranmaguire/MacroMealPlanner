import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

type CarouselItem = {
  src: string;
  alt: string;
  caption: string;
  description: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

const BootstrapCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
          />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BootstrapCarousel;