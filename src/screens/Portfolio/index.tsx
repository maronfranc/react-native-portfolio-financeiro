import React, { useState, useReducer, useContext, useEffect } from 'react';

import { Card, Title, Container, Button, Input } from '../../components/UI'
import PortfolioContext from '../../context/portfolioContext';
import { FlatList } from 'react-native';


export default function PortfolioScreen() {
  const context = useContext(PortfolioContext)
  const { portfolio } = context.portfolio;
  
  const _renderItem = (item) => {
    <Title>{item[0].currency}: {item[0].amount}</Title>
  }
  // useEffect(() => {
  //   console.log(context.portfolio.portfolio[0].amount);
  // }, [])
  // const test: JSX.Element = context.portfolio.portfolio[0].amount;
  return (
    <Container>
      <Card>
        <Title>Portfolio: </Title>
        <FlatList 
          data={}
          renderItem={}
          keyExtractor={}
        />
        <Title>Em ordens: </Title>
      </Card>
    </Container>
  );
}
