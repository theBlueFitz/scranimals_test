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
import Popover, { Rect } from 'react-native-popover-view'
import { useState } from 'react'

export const ShopItemCard = ({ item }) => {
  const [popover, setPopover] = useState(false)

  return (
    <View style={styles.card}>
      <Pressable
        onPress={() => {
          setPopover(true)
        }}
      >
        <View style={styles.imgWrapper}>
          <Image source={{ uri: item.itemImgUrl }} style={styles.img} />
        </View>
      </Pressable>

      <Popover
        isVisible={popover}
        onRequestClose={() => {
          setPopover(false)
        }}
      >
        <View style={styles.popoverWrapper}>
          <View style={styles.popover}>
            <Image source={{ uri: item.itemImgUrl }} style={styles.imgPop} />
            <View style={styles.icons}>
              <Pressable
                onPress={() => {
                  setPopover(false)
                }}
              >
                <Image
                  source={require('../img_assets/check-circle-solid.svg')}
                  style={styles.exit}
                />
              </Pressable>
              <View style={styles.textWrap}>
                <Text style={styles.popText}>{item.itemName}</Text>
                <Text style={styles.popText}>{item.itemCost}</Text>
              </View>
              <Pressable
                onPress={() => {
                  setPopover(false)
                }}
              >
                <Image
                  source={require('../img_assets/times-circle-solid.svg')}
                  style={styles.exit}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Popover>
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrapper: {
    width: 90,
    height: 90,
  },
  img: {
    flex: 1,
    width: '100%',
    height: undefined,
  },
  card: {
    width: 100,
    height: 100,
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
  popover: {
    backgroundColor: '#FFD23F',
    borderRadius: 100 / 5,
    borderWidth: 3,
    borderColor: '#fff',
    height: 300,
    alignItems: 'center',
  },
  imgPop: {
    width: 160,
    height: 160,
  },
  textWrap: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  popText: {
    fontSize: 34,
    color: '#540D6E',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  exit: {
    height: 65,
    width: 65,
    alignSelf: 'center',
  },
})
