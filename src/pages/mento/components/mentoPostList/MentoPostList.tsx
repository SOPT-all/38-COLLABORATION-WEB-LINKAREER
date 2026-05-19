import MentoCenterBanner from '@pages/mento/components/mentoBanner/mentoCenterBanner/MentoCenterBanner';
import { CENTER_AD_DATA } from '@pages/mento/mocks/centerAdData';
import type { Post } from '@pages/mento/types/post';

import MentoListItem from './mentoListItem/MentoListItem';

import * as styles from './MentoPostList.css';

interface MentoPostListProps {
  postList: Post[];
  isPending: boolean;
  isError: boolean;
}

const MentoPostList = ({
  postList,
  isPending,
  isError,
}: MentoPostListProps) => {
  if (isPending) {
    return <div>게시글을 불러오는 중입니다.</div>;
  }

  if (isError) {
    return <div>게시글을 불러오지 못했습니다.</div>;
  }

  return (
    <ul className={styles.postList}>
      {postList.map((post) => (
        <MentoListItem key={post.id} post={post} />
      ))}
      <li>
        <MentoCenterBanner ad={CENTER_AD_DATA} />
      </li>
    </ul>
  );
};

export default MentoPostList;
