import React, { useContext } from 'react';

import PortfolioContext from '../../context/portfolioContext';
import { LinearGradient } from '../../components/UI'
import ListOfAssets from '../../components/ListOfAssets';


export default function PortfolioScreen({ navigation }) {
  const context = useContext(PortfolioContext)
  const { portfolio } = context.portfolio;
  return (
    <LinearGradient>

      <ListOfAssets data={portfolio} />

    </LinearGradient>
  );
}

PortfolioScreen.navigationOptions = {
  title: 'Portfólio'
}