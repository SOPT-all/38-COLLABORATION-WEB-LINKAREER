import IcX from '@assets/svg/IcXBlue200';
import { typo } from '@styles/typography.css';

import * as styles from './Tag.css';

type TagProps = {
  text: string;
  color: 'gray' | 'red' | 'blue' | 'black';
  size: 'small' | 'large' | 'withIcon';
};

const Tag = ({ text, color, size }: TagProps) => {
  const hasXIcon = size === 'withIcon';
  return (
    <span className={`${styles.tag({ size, color })} ${typo.caption_m_12}`}>
      {text}
      {hasXIcon && <IcX width="1.6rem" height="1.6rem" />}
    </span>
  );
};
export default Tag;
