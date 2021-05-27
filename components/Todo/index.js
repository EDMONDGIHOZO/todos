import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	ScrollView,
	Alert,
} from "react-native";

import Single from "./SingleTodo";
import Create from "./Create";

const Todo = () => {
	const [tasks, setTasks] = useState([]);

	const itemRemover = (key) => {
		setTasks((prevs) => {
			return prevs.filter((task) => task.key != key);
		});
	};

	const creator = (text) => {
		if (text.length > 3) {
			setTasks((prevs) => {
				return [{ title: text, key: Math.random().toString() }, ...prevs];
			});
		} else {
			Alert.alert("oops", "task name must be more than three characters", [
				{ text: "understood", onPress: () => console.log("understood ") },
			]);
		}
	};

	return (
		<View style={styles.container}>
			<View>
				<Create submitHandler={creator} />
			</View>
			<View style={styles.titleContainer}>
				<Text style={styles.title}> All tasks </Text>
			</View>
			<FlatList
				data={tasks}
				renderItem={({ item }) => <Single item={item} remover={itemRemover} />}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		padding: 5,
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 6,
	},
	titleContainer: {
		padding: 2,
		textAlign: "center",
		marginTop: 10,
	},
	title: {
		fontSize: 15,
		fontWeight: "bold",
		textTransform: "uppercase",
	},
});

export default Todo;
