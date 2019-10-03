import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Card, Title, Button, Text } from '../UI';
import { PortfolioCurrencyInterface } from '../../interfaces';
import Icon from 'react-native-vector-icons/Ionicons';

interface FlatListData {
  index: number;
  item: PortfolioCurrencyInterface;
}
const ListOfAssets = (props: any) => {
  // TODO: Adicionar ícones dinamicamente
  let _renderItem = (portfolio: FlatListData) => {
    const { name, totalBalance } = portfolio.item
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('TradingScreen', {
            itemId: 86,
            name
          })
        }}
      >
        <Card style={styles.container}>
          <Icon
            name="md-cash"
            size={30}
            color="#fff"
            style={{ alignSelf: 'center', margin: 5 }} />
          <Text>{name}: {totalBalance}</Text>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
      style={styles.flatList}
      data={props.data}
      renderItem={_renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  flatList: { width: '100%' }
});

export default withNavigation(ListOfAssets);