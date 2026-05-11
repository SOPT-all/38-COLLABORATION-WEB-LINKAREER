import type { ReactNode } from 'react';
import { button } from './Button.css';

interface Props {
  color?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  color = 'filled',
  size = 'lg',
  children,
  onClick,
}: Props) => {
  return (
    <button type="button" className={button({ color, size })} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
