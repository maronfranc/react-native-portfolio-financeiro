import React, { useContext } from 'react';

import PortfolioContext from '../../context/portfolioContext';
import { Title, Container } from '../../components/UI'
import ListOfAssets from '../../components/ListOfAssets';


export default function PortfolioScreen({ navigation }) {
  const context = useContext(PortfolioContext)
  const { portfolio } = context.portfolio;
  return (
    <Container>

      <Title style={{ backgroundColor: '#132', width: '100%' }}>Portfólio em reais</Title>
      <ListOfAssets data={portfolio} />

    </Container>
  );
}

PortfolioScreen.navigationOptions = {
  title: 'Portfólio'
}