import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Card, Title, Button, Container } from '../../components/UI';

// import { Container } from './styles';

function TradingScreen() {
  const [balance, setBalance] = useState(10000)
  const [orders, setOrder] = useState(0)

  const buy = (amount: number) => {
    setBalance(balance - amount)
    setOrder(orders + amount)
  }
  const sell = (amount: number) => {
    if (orders <= 0) return;
    setOrder(orders - amount)
    setBalance(balance + amount)
  }


  return (
    <Container>
      <Card>
        <Title>Total:{balance}</Title>
        <Title>Em ordens:{orders}</Title>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onPress={() => { buy(500) }} backgroundColor='green'>Compra</Button>
          <Button onPress={() => { sell(500) }} backgroundColor='maroon'>Venda</Button>
        </View>
      </Card>
    </Container>

  )
}

export default TradingScreen;