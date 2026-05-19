import { useNavigate } from 'react-router';

import ClipBoardImage from '@assets/svg/Graphic1';
import ClockImage from '@assets/svg/Graphic2';
import Button from '@components/button/Button';
import type {
  HomeCuratedCardImageType,
  HomeCuratedCardProps,
} from '@pages/home/types/homeCuratedCard';

import * as styles from './HomeCuratedCard.css';

const CARD_IMAGE: Record<HomeCuratedCardImageType, typeof ClipBoardImage> = {
  clipboard: ClipBoardImage,
  clock: ClockImage,
};

const HomeCuratedCard = ({
  eyebrowText,
  cardTitle,
  buttonText = '보러가기',
  imageType = 'clipboard',
  to,
}: HomeCuratedCardProps) => {
  const CuratedImage = CARD_IMAGE[imageType];
  const navigate = useNavigate();
  const formattedCardTitle = cardTitle.join('\n');
  const handleButtonClick = () => {
    void navigate(to);
  };

  return (
    <article className={styles.curatedCard}>
      <div className={styles.curatedContentContainer}>
        <div className={styles.curatedTextContainer}>
          <p className={styles.cardEyebrow}>{eyebrowText}</p>
          <h2 className={styles.cardTitle}>{formattedCardTitle}</h2>
        </div>
        <Button size="sm" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </div>
      <CuratedImage className={styles.cardImage} aria-hidden={true} />
    </article>
  );
};

export default HomeCuratedCard;
