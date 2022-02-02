import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { getUserWater } from "../utils/dbCalls";
import { DiaryCard } from "./DiaryCard";
import { getSevenDates, dateConverter } from "../utils/utils";

export const Diary = () => {
  const { currUser } = useContext(UserContext);
  const [waterLogs, setWaterLogs] = useState([]);
  const [sevenDays, setSevenDays] = useState([]);
  useEffect(() => {
    getUserWater(currUser.userId).then((blub) => {
      setWaterLogs(blub);
      setSevenDays(getSevenDates());
    });
  }, [currUser]);
  //console.log(waterLogs);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Diary</Text>
      <ScrollView>
        {sevenDays.map((day) => {
          let tobe = 0;
          waterLogs.forEach((log) => {
            for (const lol in log) {
              console.log(lol, "<--lol", day, "<--day");
              if (lol === day) {
                // tobe = <Text>{log[day]}</Text>;
                tobe = (
                  <View>
                    <Text styles={styles.text}>Water Intake: {log[day]}</Text>
                  </View>
                );
              } else {
                // tobe = <Text>No Data for This day</Text>;
                tobe = (
                  <View>
                    <Text styles={styles.text}>No Data for today</Text>
                  </View>
                );
              }
            }
          });
          return (
            <View key={day} style={styles.card}>
              <Text style={styles.date}>{dateConverter(day)}</Text>
              <Text style={styles.diary}>{tobe}</Text>
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
    fontWeight: "bolder",
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
    fontWeight: "bolder",
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
