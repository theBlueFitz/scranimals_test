import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUserWater, getUserSteps } from "../utils/dbCalls";
import { DiaryCard } from "./DiaryCard";
import { getSevenDates, dateConverter } from "../utils/utils";

export const Diary = () => {
  const { currUser } = useContext(UserContext);
  const [waterLogs, setWaterLogs] = useState([]);
  const [stepsLogs, setStepsLogs] = useState([]);
  const [sevenDays, setSevenDays] = useState([]);
  useEffect(() => {
    setSevenDays(getSevenDates());
    getUserWater(currUser.userId).then((blub) => {
      setWaterLogs(blub);
    });
    getUserSteps(currUser.userId).then((blub) => {
      setStepsLogs(blub);
    });
  }, [currUser]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Diary</Text>
      <ScrollView>
        {sevenDays.map((day) => {
          let water = 0;
          let steps = 0;
          waterLogs.forEach((log) => {
            for (const lol in log) {
              if (lol === day) {
                water = (
                  <View>
                    <Text styles={styles.text}>Water Intake: {log[day]}</Text>
                  </View>
                );
              } else {
                water = (
                  <View>
                    <Text styles={styles.text}>Water Intake: 0</Text>
                  </View>
                );
              }
            }
          });
          stepsLogs.forEach((log) => {
            for (const lol in log) {
              if (lol === day) {
                steps = (
                  <View>
                    <Text styles={styles.text}>Steps: {log[day]}</Text>
                  </View>
                );
              } else {
                steps = (
                  <View>
                    <Text styles={styles.text}>Steps: 0</Text>
                  </View>
                );
              }
            }
          });
          return (
            <View key={day} style={styles.card}>
              <Text style={styles.date}>{dateConverter(day)}</Text>
              <Text style={styles.diary}>{water}</Text>
              <Text style={styles.diary}>{steps}</Text>
            </View>
          );
        })}
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
