import type { HomeBannerProps } from '@pages/home/types/homeBanner';

import * as style from './HomeBanner.css';

const HomeBanner = ({
  imageUrl,
  imageAlt,
  borderPosition = 'bottom',
}: HomeBannerProps) => {
  return (
    <div className={style.bannerContainer({ borderPosition })}>
      <img className={style.bannerImage} src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default HomeBanner;
