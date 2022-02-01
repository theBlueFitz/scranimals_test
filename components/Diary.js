import { Text, View, StyleSheet } from 'react-native';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/User';
import { getUserWater } from '../utils/dbCalls';

export const Diary = () => {
  const { currUser } = useContext(UserContext);

  useEffect(() => {
    console.log(getUserWater(currUser.userId), 'is useEffect');
  }, []);
  return (
    <View style={styles.container}>
      <Text>{!!currUser.water ? JSON.stringify(currUser.water) : null}</Text>
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
