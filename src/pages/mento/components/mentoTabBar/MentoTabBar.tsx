import { useState } from 'react';

import Chip from '@components/chip/Chip';
import { MENTO_COMPANY_CHIPS } from '@pages/mento/constants/mentoChips';

import * as styles from './MentoTabBar.css';

const MentoTabBar = () => {
  const [selectedChip, setSelectedChip] = useState<string>();
  return (
    <div className={styles.container}>
      {MENTO_COMPANY_CHIPS.map((chip) => (
        <Chip
          onClick={() => setSelectedChip(chip)}
          key={chip}
          variant={selectedChip === chip ? 'filled' : 'default'}
        >
          {chip}
        </Chip>
      ))}
    </div>
  );
};

export default MentoTabBar;
