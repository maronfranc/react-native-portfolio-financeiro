import React, { useContext } from 'react';
import { ScrollView } from 'react-native';

import { Title, Container } from '../../components/UI';
import Pie from '../../components/Chart/Pie';
import portfolioContext from '../../context/portfolioContext';


export default function ReturnsScreen() {
  const context = useContext(portfolioContext)
  const { portfolio } = context.portfolio;
  return (
    <>
      <Container>
        <ScrollView style={{ width: '100%' }}>
          <Title>Portfólio em reais.</Title>
          <Pie data={portfolio} />
          <Title>Retorno simples</Title>
        </ScrollView>
      </Container>
    </>
  )
}

// Configuração da tab do Navigation
ReturnsScreen.navigationOptions = {
  title: 'Retorno',
};