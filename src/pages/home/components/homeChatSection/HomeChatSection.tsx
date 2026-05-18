import HomeChatCard from '@pages/home/components/homeChatCard/HomeChatCard';
import HomeSectionHeader from '@pages/home/components/homeSectionHeader/HomeSectionHeader';
import { HOME_CHAT_CARDS } from '@pages/home/mocks/homeChat';

import * as styles from './HomeChatSection.css';

const HomeChatSection = () => {
  return (
    <section className={styles.mainContainer}>
      <HomeSectionHeader
        title="관심 기업 채팅방"
        description="기업의 채용 정보, 합격 스펙 등 정보를 공유하세요"
        showViewMore
      />

      <div className={styles.chatList}>
        {HOME_CHAT_CARDS.map((chat) => (
          <HomeChatCard key={chat.companyName} {...chat} />
        ))}
      </div>
    </section>
  );
};

export default HomeChatSection;
