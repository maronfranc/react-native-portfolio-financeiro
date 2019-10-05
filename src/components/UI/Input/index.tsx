import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props: any) => (
  <TextInput
    {...props}
    style={[
      styles.input,
      props.style,
      props.invalid ? styles.invalid : null,
    ]}
    autoCapitalize="sentences"
    underlineColorAndroid="rgba(0,0,0,0)" />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    paddingLeft: 15,
    fontSize: 20,
    height: 50,
    color: '#FFF',
    backgroundColor: 'rgba(255,255,255,0.25)',
  },
  invalid: {
    borderColor: 'maroon',
    backgroundColor: 'rgba(128, 0, 0, 0.25)'
  }
});

export default Input;
