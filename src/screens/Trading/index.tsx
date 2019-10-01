import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Card, Title, Button, Container } from '../../components/UI';
import Chart from '../../components/Chart/LineChart';
import { getHoursMinutesSeconds, replaceDotWithComma } from '../../utils/functions';

export default function TradingScreen() {
  let initialBalance = 1000
  const [balance, setBalance] = useState(initialBalance)
  const [balanceHistory, setBalanceHistory] = useState([initialBalance])
  const [orders, setOrder] = useState(0)
  const [ordersHistory, setOrdersHistory] = useState([0])
  const [timeLabels, setTimelabels] = useState([getHoursMinutesSeconds()])

  const buy = (amount: number) => {
    if (balance < amount) return;

    let balanceValue = balance - amount
    let orderValue = orders + amount
    setBalance(balanceValue)
    setOrder(orderValue)
    limitChart(balanceHistory, timeLabels)
    limitChart(ordersHistory, timeLabels)
    setTimelabels(timeLabels => [...timeLabels, getHoursMinutesSeconds()])

    setBalanceHistory(balanceHistory => [...balanceHistory, balanceValue])
    setOrdersHistory(ordersHistory => [...ordersHistory, orderValue])
  }
  const sell = (amount: number) => {
    if (orders < amount) return;
    let orderValue = orders - amount
    let balanceValue = balance + amount
    setOrder(orderValue)
    setBalance(balanceValue)
    limitChart(ordersHistory, timeLabels)
    limitChart(balanceHistory, timeLabels)
    setTimelabels(timeLabels => [...timeLabels, getHoursMinutesSeconds()])

    setOrdersHistory(ordersHistory => [...ordersHistory, orderValue])
    setBalanceHistory(balanceHistory => [...balanceHistory, balanceValue])
  }
  // TODO: xAxis, Yaxis
  const limitChart = (chartData, timeData, limit = 5) => {
    // Condicional que limita o maximo de valores no gráfico.
    // (limit - 1) serve para deixar o @arg limit mais intuitivo
    if (chartData.length > (limit - 1)) chartData.shift()
    if (timeData.length > (limit - 1)) timeLabels.shift()
  }

  // Valores para o Gráfico do portfólio
  const balanceData = {
    labels: timeLabels,
    datasets: [{
      data: balanceHistory,
    }]
  }

  const orderData = {
    labels: timeLabels,
    datasets: [{
      data: ordersHistory
    }]
  }

  return (
    <Container>
      <ScrollView>

        <Card>
          <Title>Conta: R${replaceDotWithComma(balance)}</Title>
          <Title>Em Ordens: R${replaceDotWithComma(orders)}</Title>
        </Card>
        <Chart data={balanceData} />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button onPress={() => { buy(Math.random() * 100) }} backgroundColor='green'>Abrir Ordem de Compra</Button>
          <Button onPress={() => { sell(Math.random() * 100) }} backgroundColor='maroon'>Fechar Ordem de Compra</Button>
        </View>
        <Chart
          data={orderData}
          backgroundColor={'#800000'}
          backgroundGradientFrom={'#800000'}
          backgroundGradientTo={'#ffa726'} />
      </ScrollView>
    </Container>

  )
}

TradingScreen.navigationOptions = {
  title: 'Trade'
}
