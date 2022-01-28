import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  Pressable,
} from 'react-native'

export const ItemPopover = ({ item }) => {
  return (
    <View style={styles.popOver}>
      <Text>Single Item</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  popOver: {
    flex: 1,
    alignSelf: 'center',
    width: 350,
    height: 350,
    borderRadius: 100 / 5,
    backgroundColor: '#fff',
  },
})
