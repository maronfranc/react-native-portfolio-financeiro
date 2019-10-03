import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props: any) => (
  <View {...props} style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#777',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: '#354'
  },
});

export default Card;