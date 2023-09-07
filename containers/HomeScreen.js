// HomeScreen.js

import {Text, View, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>This is the HomeScreen component</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Films Populaires")}>
            <Text>Go to populars !</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;