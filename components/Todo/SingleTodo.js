import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Single = ({ item, remover }) => {
	return (
		<TouchableOpacity onPress={() => remover(item.key)}>
			<View style={styles.item}>
				<Text style={styles.title}> {item.title} </Text>
				<MaterialIcons name="delete" color="red" size={22} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		marginTop: 10,
		padding: 20,
		backgroundColor: "black",
		borderRadius: 6,
		marginLeft: 4,
		marginRight: 4,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	title: {
		color: "white",
	},
});

export default Single;
