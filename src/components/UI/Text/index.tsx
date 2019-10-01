import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainText = (props: any) => (
	<Text
		{...props}
		style={[styles.text, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		backgroundColor: "transparent",
		marginVertical: 10,
		marginHorizontal: 5,
		color: '#000'
	}
});

export default MainText;