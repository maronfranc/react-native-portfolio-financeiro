import React, { useState, useReducer, useContext, useEffect } from 'react';
import { FlatList } from 'react-native';

import PortfolioContext from '../../context/portfolioContext';
import { Card, Title, Container, Button, Input, Text } from '../../components/UI'
import Pie from '../../components/Chart/PieChart';


export default function PortfolioScreen() {
  const context = useContext(PortfolioContext)
  const { portfolio } = context.portfolio;
  
  // FIXME: 
  // const test = portfolio.map(val => val)

  return (
    <Container>
      <Card style={{margin: 10}}>
        <Title>Portfólio em reais.</Title>
        <Pie />
      </Card>
      <Button onPress={() => { context.buy(500, 'BRL')}} backgroundColor={'green'}>Abrir Ordem de Compra</Button>
      <Button onPress={() => { context.sell(500, 'BRL')}} backgroundColor={'maroon'}>Fechar Ordem de Compra</Button>

    </Container>
  );
}

PortfolioScreen.navigationOptions = {
  title: 'Portfólio'
}