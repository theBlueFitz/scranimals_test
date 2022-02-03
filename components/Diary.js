import { Text, View, StyleSheet, ScrollView } from "react-native";

export const Diary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Diary</Text>
      <ScrollView>
        <View key="1" style={styles.card}>
          <Text style={styles.date}>February 2, 2022</Text>
          <Text style={styles.diary}>Water Intake: 4</Text>
        </View>
        <View key="2" style={styles.card}>
          <Text style={styles.date}>February 1, 2022</Text>
          <Text style={styles.diary}>Water Intake: 8</Text>
        </View>
        <View key="3" style={styles.card}>
          <Text style={styles.date}>January 31, 2022</Text>
          <Text style={styles.diary}>Water Intake: 2</Text>
        </View>
        <View key="4" style={styles.card}>
          <Text style={styles.date}>January 30, 2022</Text>
          <Text style={styles.diary}>Water Intake: 7</Text>
        </View>
        <View key="5" style={styles.card}>
          <Text style={styles.date}>January 29, 2022</Text>
          <Text style={styles.diary}>No data for today.</Text>
        </View>
        <View key="6" style={styles.card}>
          <Text style={styles.date}>January 28, 2022</Text>
          <Text style={styles.diary}>Water Intake: 3</Text>
        </View>
        <View key="7" style={styles.card}>
          <Text style={styles.date}>January 27, 2022</Text>
          <Text style={styles.diary}>Water Intake: 2</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3BCEAC",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#540D6E",
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    height: 80,
    width: 300,
    backgroundColor: "#FFD23F",
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
  },
  date: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#540D6E",
    paddingTop: 10,
  },
  diary: {
    fontSize: 20,
    color: "#540D6E",
    marginTop: 10,
  },
});
