import IcX from '@assets/svg/IcXBlue200';

import * as styles from './Tag.css';

type BaseTagProps = {
  text: string;
  onRemove?: () => void;
};

type TagProps =
  | (BaseTagProps & {
      size: 'small' | 'medium';
      color: 'gray' | 'red' | 'blue' | 'black';
    })
  | (BaseTagProps & {
      size: 'withIcon';
      color: 'blue';
    });

const Tag = ({ text, color, size, onRemove }: TagProps) => {
  return (
    <span className={styles.tag({ size, color })}>
      {text}
      {size === 'withIcon' && (
        <IcX width="1.6rem" height="1.6rem" onClick={onRemove} />
      )}
    </span>
  );
};
export default Tag;
