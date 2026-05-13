import * as style from './homeBanner.css';

interface HomeBannerProps {
  imageUrl: string;
  imageAlt: string;
}

const HomeBanner = ({ imageUrl, imageAlt }: HomeBannerProps) => {
  return (
    <div className={style.bannerContainer}>
      <img className={style.bannerImage} src={imageUrl} alt={imageAlt} />
    </div>
  );
};

export default HomeBanner;
