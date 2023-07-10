import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'styled-components/native';

const TopSmall = styled.View`
  margin-top: 4px;
`;
const TopMedium = styled.View`
  margin-top: 8px;
`;
const TopLarge = styled.View`
  margin-top: 16px;
`;

const Spacer = ({ variant }) => {
  if (variant === 'top.medium') {
  } else {
    return <View></View>;
  }
};

export default Spacer;
