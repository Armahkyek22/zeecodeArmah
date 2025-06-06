import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text testID="well" style={styles.well}>welcome to zeecode</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  well: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
});