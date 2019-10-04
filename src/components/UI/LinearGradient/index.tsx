import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Container = (props: any) => (
  <LinearGradient
    {...props}
    colors={['#2d5936', '#113322']}
    style={[styles.container, props.style]}
  >
    {props.children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Container;


