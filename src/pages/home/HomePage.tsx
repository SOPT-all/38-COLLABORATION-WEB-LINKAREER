import { useState } from 'react';

import Indicator from '@pages/recruitDetail/components/indicator/Indicator';

const TOTAL_COUNT = 4;

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, TOTAL_COUNT - 1));

  return (
    <>
      <h1></h1>
      <Indicator totalCount={TOTAL_COUNT} currentIndex={currentIndex} />
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        이전
      </button>
      <button onClick={handleNext} disabled={currentIndex === TOTAL_COUNT - 1}>
        다음
      </button>
    </>
  );
};

export default HomePage;
