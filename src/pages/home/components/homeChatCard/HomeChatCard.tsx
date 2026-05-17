import IcCerti from '@assets/svg/IcCerti';
import type { HomeChatCardData } from '@pages/home/types/homeChatCard';

import * as styles from './HomeChatCard.css';

const HomeChatCard = ({
  logoUrl,
  companyName,
  participantCount,
  onJoinClick,
}: HomeChatCardData) => {
  return (
    <article className={styles.card}>
      <div className={styles.innerBox}>
        <div className={styles.topBox}>
          <div className={styles.imageBox}>
            <img
              src={logoUrl}
              alt={`${companyName} 로고`}
              className={styles.image}
            />
          </div>

          <div className={styles.textBox}>
            <div className={styles.statusBox}>
              <IcCerti className={styles.statusIcon} />
              <span className={styles.statusText}>현직자 대화중</span>
            </div>

            <h3 className={styles.companyName}>{companyName}</h3>

            <p className={styles.participantCount}>{participantCount}명</p>
          </div>
        </div>

        <button
          type="button"
          className={styles.buttonBox}
          onClick={onJoinClick}
        >
          <span className={styles.buttonText}>참여하기</span>
        </button>
      </div>
    </article>
  );
};

export default HomeChatCard;
