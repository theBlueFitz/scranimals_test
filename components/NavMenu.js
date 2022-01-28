import { View, Text, StyleSheet } from 'react-native-web';

export const NavMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wallet}>Wallet</Text>
      <Text style={styles.menu}>Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wallet: { backgroundColor: 'green' },
  menu: { backgroundColor: 'purple' },
});
