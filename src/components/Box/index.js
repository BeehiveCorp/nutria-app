import React from 'react';
import { View } from 'react-native';

const Box = ({
  horizontal,
  spaceBetween,
  alignItemsCenter,
  justifyContentCenter,
  style,
  children,
}) => {
  const flexDirection = horizontal ? 'row' : 'column';

  const justifyContent = spaceBetween
    ? 'space-between'
    : justifyContentCenter
    ? 'center'
    : 'flex-start';

  const alignItems = alignItemsCenter ? 'center' : 'stretch';

  return (
    <View
      style={{
        flexDirection,
        justifyContent,
        alignItems,
        ...style,
      }}
    >
      {children}
    </View>
  );
};

export default Box;
