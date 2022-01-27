const {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  Image,
  StyleSheet
} = require('react-native')

export const ShopItemCard = ({item}) => {
  console.log(item.itemImgUrl)
  return <View>
    <Text>{item.itemName}</Text>
    <Image source={{uri:item.itemImgUrl}} style={styles.img} />
    <Text>{item.itemCost}</Text>
  </View>
}

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20
  }
})
