import { useNavigate } from 'react-router';

import ClipBoardImage from '@assets/svg/Graphic1';
import ClockImage from '@assets/svg/Graphic2';
import Button from '@components/button/Button';

import * as style from './HomeCuratedCard.css';

const CARD_IMAGE = {
  clipboard: ClipBoardImage,
  clock: ClockImage,
} as const;

interface HomeCuratedCardProps {
  eyebrowText: string;
  cardTitle: string[];
  buttonText?: string;
  imageType?: keyof typeof CARD_IMAGE;
  to: string;
}

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
    <article className={style.curatedCard}>
      <div className={style.curatedContentContainer}>
        <div className={style.curatedTextContainer}>
          <p className={style.cardEyebrow}>{eyebrowText}</p>
          <h2 className={style.cardTitle}>{formattedCardTitle}</h2>
        </div>
        <Button size="sm" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </div>
      <CuratedImage className={style.cardImage} aria-hidden={true} />
    </article>
  );
};

export default HomeCuratedCard;
