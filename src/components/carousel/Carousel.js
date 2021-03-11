import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.99images.com/photos/wallpapers/space/milky-way-galaxyandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-gbs9m.jpg?v=1613007731',
    altText: 'Image of the day',
    caption: 'Milky way galaxy'
  },
  {
    src:'https://www.advancedsciencenews.com/wp-content/uploads/2020/12/farthest-and-oldest-galaxy.jpg',
    altText:'Image  of tth day',
    caption: 'Galaxy '
  },
  {
    src: 'https://su.org/wp-content/uploads/2018/10/Hero-Size-1200-x-600-1080x600.jpg',
    altText: 'image of the day',
    caption: 'Galaxy Colors' 
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="bg-white"
      >
        <img className="img-fluid" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
      <div className="col">
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="mb-5"
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
  );
}

export default Example;