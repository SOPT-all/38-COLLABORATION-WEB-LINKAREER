import SvgIcCheckWhite from '@assets/svg/IcCheckWhite';

import * as styles from './Checkbox.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <label htmlFor="checkbox" className={styles.container}>
      <input
        id="checkbox"
        type="checkbox"
        className={styles.hiddenInput}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className={styles.checkbox}>
        {checked && <SvgIcCheckWhite width={'1.6rem'} height={'1.6rem'} />}
      </div>
    </label>
  );
};

export default Checkbox;
