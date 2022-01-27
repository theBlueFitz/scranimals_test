const {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  Image,
  StyleSheet,
} = require('react-native')
import { ShopSingleItem } from './ShopSingleItem'

export const ShopItemCard = ({ item, navigation, route }) => {
  return (
    <View style={styles.card}>
      <Pressable>
        <Image source={{ uri: item.itemImgUrl }} style={styles.img} />
        <Text>
          {item.itemName} {item.itemCost}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: '#FFD23F',
    borderRadius: 100 / 5,
    borderWidth: 3,
    borderColor: '#fff',
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
