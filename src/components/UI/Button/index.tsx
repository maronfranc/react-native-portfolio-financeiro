import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";


const Button = (props: any) => {
  const content = (
    <View
      style={[
        styles.button,
        props.disabled ? styles.disabled : null,
        {backgroundColor: props.backgroundColor}
      ]}
    >
      <Text style={[styles.textStyles, props.disabled ? styles.disabledText : null]}>
        {props.children}
      </Text>
    </View>
  );
  if (props.disabled) {
    return content;
  }
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bbb',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#aaa'
  },
  disabledText: {
    color: '#aaa'
  },
  textStyles: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Button;
