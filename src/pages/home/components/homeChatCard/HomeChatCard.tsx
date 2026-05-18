import IcCerti from '@assets/svg/IcCerti';

import * as styles from './HomeChatCard.css';
import Button from '@shared/components/button/Button';

interface HomeChatCardProps {
  logoUrl: string;
  companyName: string;
  participantCount: number;
  onJoinClick?: () => void;
}

const HomeChatCard = ({
  logoUrl,
  companyName,
  participantCount,
  onJoinClick,
}: HomeChatCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.imageBox}>
            <img
              src={logoUrl}
              alt={`${companyName} 로고`}
              className={styles.image}
            />
          </div>

          <div className={styles.textBox}>
            <div className={styles.statusBox}>
              <IcCerti width="1.6rem" height="1.6rem" />
              <span className={styles.statusText}>현직자 대화중</span>
            </div>

            <h3 className={styles.companyName}>{companyName}</h3>

            <p className={styles.participantCount}>{participantCount}명</p>
          </div>
        </div>

        <Button color="outlined" size="md" onClick={onJoinClick}>
          참여하기
        </Button>
      </div>
    </article>
  );
};

export default HomeChatCard;
