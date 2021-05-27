import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>task manager </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#F2EDA2",
		height: 80,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 25,
	},

	title: {
		color: "black",
		fontSize: 14,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});

export default Header;
