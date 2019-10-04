import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Title, LinearGradient, Input, Text, Card } from '../../components/UI';
import Pie from '../../components/Chart/Pie';
import portfolioContext from '../../context/portfolioContext';
import { capitalGainsYield } from '../../utils/formulas';
import { percent, replaceCommaDot } from '../../utils/functions';
import { ScrollView } from 'react-native-gesture-handler';


export default function ReturnsScreen() {
  const context = useContext(portfolioContext)
  const { portfolio } = context.portfolio;

  const [buyPrice, setBuyPrice] = useState('')
  const [sellPrice, setSellPrice] = useState('')
  const [capitalYield, setCapitalYield] = useState('')

  const calculateYield = (buyPrice: string, sellPrice: string) => {
    let buyNumber = replaceCommaDot(buyPrice)
    let sellNumber = replaceCommaDot(sellPrice)
    let stringResult = capitalGainsYield(buyNumber, sellNumber).toString()

    setCapitalYield(stringResult)
  }
  return (
    <>
      <LinearGradient>
        <ScrollView>

          <Title>Calculadora de Rendimento</Title>
          <Text>Valor da compra: {buyPrice}</Text>
          <Input
            value={buyPrice}
            onChangeText={(value: string) => { setBuyPrice(value) }}
            onBlur={() => { calculateYield(buyPrice, sellPrice) }}
            keyboardType={'decimal-pad'} />
          <Text>Valor da venda: {sellPrice}</Text>
          <Input
            value={sellPrice}
            onChangeText={(value: string) => { setSellPrice(value) }}
            onBlur={() => { calculateYield(buyPrice, sellPrice) }}
            keyboardType={'decimal-pad'} />
          <Text>Resultado: {percent(capitalYield)}</Text>


        </ScrollView>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#354',
    marginVertical: 25,
    width: '99%'
  }
});

// Configuração da tab do Navigation
ReturnsScreen.navigationOptions = {
  title: 'Retorno',
};