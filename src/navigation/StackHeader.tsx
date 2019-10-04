import React, { useContext } from 'react';
import { View } from 'react-native';

import portfolioContext from '../context/portfolioContext';
import { Text } from '../components/UI';
import { brl } from '../utils/functions';
import { sumPortfolio } from '../utils/formulas';

const StackHeader = () => {
  const context = useContext(portfolioContext)
  const { portfolio } = context.portfolio;
  const balanceSum = sumPortfolio(portfolio)
  return (
    <View>
      <Text>Total: {brl(balanceSum)}</Text>
    </View>
  );
};


export default StackHeader;