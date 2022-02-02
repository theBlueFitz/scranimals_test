import React, { View, Text, StyleSheet } from 'react-native';

export const DiaryCard = ({ log }) => {
  return (
    <View style={styles.card}>
      <Text>
        date:{Object.keys(log)} glasses drank:{Object.values(log)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 50,
    width: 300,
    backgroundColor: 'pink',
    marginBottom: 10,
  },
});
