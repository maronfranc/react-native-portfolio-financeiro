import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Container from '../Container';

const ScrollContainer = (props: any) => (
  <Container>
    <ScrollView {...props} style={props.scrollContainer}>
      {props.children}
    </ScrollView>
  </Container>
);

const styles = StyleSheet.create({
  scrollContainer: {
    width: '100%'
  },
});

export default ScrollContainer;


