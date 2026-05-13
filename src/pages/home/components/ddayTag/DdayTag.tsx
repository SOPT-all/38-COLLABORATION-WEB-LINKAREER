import * as style from './ddayTag.css';

interface DdayTagProps {
  daysLeft: number;
  size?: 'small' | 'medium';
}

const DdayTag = ({ size = 'small', daysLeft }: DdayTagProps) => {
  return <span className={style.ddayTag({ size })}>D-{daysLeft}</span>;
};

export default DdayTag;
