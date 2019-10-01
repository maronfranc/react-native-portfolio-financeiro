import React, { useReducer } from 'react';
import { View } from 'react-native';

import { Button, Card, Title } from '../../components/UI';


export default function ReturnsScreen() {
  return (
    <>
      <Card>
        <Title>Retorno simples</Title>
      </Card>
      <Card>
        <Title>Sharpe Ratio</Title>
      </Card>
    </>
  )
}

// Configuração da tab do Navigation
ReturnsScreen.navigationOptions = {
  title: 'Retorno',
};