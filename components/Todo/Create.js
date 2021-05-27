import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const Create = ({ submitHandler }) => {
	const [text, setText] = useState("");

	const changer = (value) => {
		setText(value);
	};

	return (
		<View style={styles.creator}>
			<Text style={styles.title}>Create Task</Text>
			<TextInput
				placeholder="eg: cooking "
				onChangeText={(value) => changer(value)}
				value={text}
				style={{ marginBottom: 10 }}
			/>

			<Button title="save" color="black" onPress={() => submitHandler(text)} />
		</View>
	);
};

const styles = StyleSheet.create({
	creator: {
		padding: 15,
		borderRadius: 10,
		borderWidth: 2,
		backgroundColor: "#F2F0CE",
	},

	title: {
		fontSize: 18,
	},
});

export default Create;
