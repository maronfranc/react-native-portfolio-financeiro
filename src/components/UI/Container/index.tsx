import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = (props: any) => (
  <View {...props} style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Container;


