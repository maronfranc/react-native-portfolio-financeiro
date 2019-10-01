import React, { useContext } from 'react';

import PortfolioContext from '../../context/portfolioContext';
import { Card, Title, Container, Button, Input, Text } from '../../components/UI'
import Pie from '../../components/Chart/Pie';


export default function PortfolioScreen() {
  const context = useContext(PortfolioContext)
  const { portfolio } = context.portfolio;

  return (
    <Container>

      <Card style={{ margin: 10 }}>
        <Title>Portfólio em reais.</Title>
        <Pie data={portfolio} />
      </Card>

    </Container>
  );
}

PortfolioScreen.navigationOptions = {
  title: 'Portfólio'
}