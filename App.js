import React from "react";
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import Todo from "./components/Todo";
import Header from "./components/layouts/Header";

const App = () => {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={Styles.container}>
				<Header />
				<Todo />
			</View>
		</TouchableWithoutFeedback>
	);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FBF37C",
	},
});

export default App;
