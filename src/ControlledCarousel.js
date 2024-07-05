import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="llama"
          src="https://media.licdn.com/dms/image/D5612AQFKqdV0LKKp0g/article-cover_image-shrink_720_1280/0/1709320468929?e=2147483647&v=beta&t=OtuH6kEoLJym_whkqFsrV4Myou_rOwem-BcQWU2qHOw"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="mistral"
          src="https://miro.medium.com/v2/resize:fit:1400/1*Gc8FQvatf7LAAk96jga0mQ.jpeg"

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="gemma"
          src="https://cdn.vox-cdn.com/thumbor/8onHwCWEebTHOpZaEoz5rcIxFYk=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25297209/STK258_GOOGLE_GEMMA__B.jpg"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
