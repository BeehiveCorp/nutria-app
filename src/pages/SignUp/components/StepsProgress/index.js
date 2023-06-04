import React from 'react';
import { Box } from '../../../../components';

import getStyles from './styles';

const StepsProgress = ({ totalSteps, currentStep }) => {
  const styles = getStyles();

  const stepsToMap = Array(totalSteps).fill(null);

  return (
    <Box horizontal spaceBetween>
      {stepsToMap.map((step, idx) => (
        <Box
          key={idx}
          style={{
            ...styles.step(currentStep >= idx + 1),
            marginLeft: idx > 0 ? 8 : 0,
          }}
        />
      ))}
    </Box>
  );
};

export default StepsProgress;
