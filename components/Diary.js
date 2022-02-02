import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/User';
import { getUserWater } from '../utils/dbCalls';
import { DiaryCard } from './DiaryCard';
import { getSevenDates } from '../utils/utils';

export const Diary = () => {
  const { currUser } = useContext(UserContext);
  const [waterLogs, setWaterLogs] = useState([]);
  const [sevenDays, setSevenDays] = useState([]);
  useEffect(() => {
    getUserWater(currUser.userId).then((blub) => {
      setWaterLogs(blub);
      setSevenDays(getSevenDates());
    });
  }, []);
  //console.log(waterLogs);
  return (
    <View style={styles.container}>
      <ScrollView>
        {sevenDays.map((day) => {
          let tobe = 0;
          waterLogs.forEach((log) => {
            for (const lol in log) {
              console.log(lol, '<--lol', day, '<--day');
              if (lol === day) {
                // tobe = <Text>{log[day]}</Text>;
                tobe = (
                  <View>
                    <Text styles={styles.text}>glasses drank:{log[day]}</Text>
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
              <Text>{day}</Text>
              <Text>{tobe}</Text>
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
    backgroundColor: '#3BCEAC',
    alignItems: 'center',
  },
  card: {
    height: 50,
    width: 200,
    backgroundColor: 'pink',
    marginBottom: 10,
  },
  text: {
    fontSize: 40,
  },
});
