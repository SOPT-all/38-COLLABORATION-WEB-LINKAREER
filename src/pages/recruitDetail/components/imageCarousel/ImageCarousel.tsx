import useCarouselDrag from '@pages/recruitDetail/hooks/useCarouselDrag';

import * as styles from './ImageCarousel.css';

interface ImageCarouselProps {
  images: { id: number; url: string; alt?: string }[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const { currentIndex, trackRef, dragHandlers } = useCarouselDrag(
    images.length,
  );

  return (
    <div className={styles.container} {...dragHandlers}>
      <div ref={trackRef} className={styles.track}>
        {images.map((image) => (
          <div key={image.id} className={styles.slide}>
            <img
              className={styles.image}
              src={image.url}
              alt={image.alt ?? '이미지'}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <span className={styles.pageLabel}>
        {currentIndex + 1}/{images.length}
      </span>
    </div>
  );
};

export default ImageCarousel;
