import * as style from './HomeBanner.css';

interface HomeBannerProps {
  imageUrl: string;
  imageAlt: string;
  borderPosition?: 'top' | 'bottom';
}

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
