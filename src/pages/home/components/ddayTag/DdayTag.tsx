import * as style from './DdayTag.css';

interface DdayTagProps {
  daysLeft: number;
  size?: 'small' | 'medium';
}

const getDdayLabel = (days: number) => {
  if (days < 0) return '마감';
  if (days === 0) return '디데이';
  return `D-${days}`;
};

const DdayTag = ({ size = 'small', daysLeft }: DdayTagProps) => {
  return (
    <span className={style.ddayTag({ size })}>{getDdayLabel(daysLeft)}</span>
  );
};

export default DdayTag;
