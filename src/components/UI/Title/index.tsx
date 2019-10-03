import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = (props: any) => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: '#FFF',
    textAlign: 'center',
    marginVertical: 10
  }
});

export default Title;
