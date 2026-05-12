import * as styles from './Tag.css';

type TagProps = {
  text: string;
  color: 'gray' | 'red' | 'blue' | 'black';
  size: 'small' | 'large';
};

const Tag = ({ text, color, size }: TagProps) => {
  return (
    <span
      className={`${styles.baseTag} ${styles.sizeVariants[size]} ${styles.colorVariants[color]} ${styles.text}`}
    >
      {text}
    </span>
  );
};
export default Tag;
