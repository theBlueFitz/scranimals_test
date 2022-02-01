import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/User';
import { getUserWater } from '../utils/dbCalls';
import { DiaryCard } from './DiaryCard';

export const Diary = () => {
  const { currUser } = useContext(UserContext);
  const [waterLogs, setWaterLogs] = useState([]);

  useEffect(() => {
    getUserWater(currUser.userId).then((blub) => {
      setWaterLogs(blub);
    });
  }, []);
  console.log(waterLogs);
  return (
    <View style={styles.container}>
      <ScrollView>
        {waterLogs.map((log) => {
          return <DiaryCard log={log} key={Object.keys(log)} />;
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
});
