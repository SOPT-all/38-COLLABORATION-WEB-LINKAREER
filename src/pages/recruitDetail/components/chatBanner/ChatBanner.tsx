import IcChat from '@assets/svg/IcChat';
import IcChevronRight from '@assets/svg/IcChevronRightGray700';

import * as styles from './ChatBanner.css';

const ChatBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <IcChat width={32} height={32} />
        <div className={styles.textContent}>
          <p className={styles.description}>
            지원자들이 정보를 나누고 있어요
            <br />
            지금 들어가서 대화에 참여해보세요!
          </p>
          <span className={styles.joinButton}>채팅방 참여하기</span>
        </div>
      </div>
      <IcChevronRight width={20} height={20} />
    </div>
  );
};

export default ChatBanner;
