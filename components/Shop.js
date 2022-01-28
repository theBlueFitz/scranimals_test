import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  Pressable,
  FlatList,
} from 'react-native'
import { getDatabase, ref, child, get } from 'firebase/database'
import { app, database } from '../firebase'
import { useState, useEffect } from 'react'
import shopItems from '../utils/dbref'
import { ShopItemCard } from './ShopItemCard'

export const Shop = ({ navigation }) => {
  const [itemList, setItemList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const dbRef = ref(database)
    get(child(dbRef, `/Shop`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItemList(() => {
            const items = []
            for (let key in snapshot.val()) {
              items.push(snapshot.val()[key])
            }
            setIsLoading(false)
            return items
          })
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error
      })
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <Pressable
          style={styles.exitButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../img_assets/times-circle-solid.svg')}
            style={styles.exit}
          />
        </Pressable>

        <View style={styles.card}>
          {isLoading
            ? null
            : itemList.map((item, index) => {
                return (
                  <View key={index}>
                    <ShopItemCard item={item} navigation={navigation} />
                    <View style={styles.cost}>
                      <Image
                        source={require('../img_assets/coins-solid.svg')}
                        style={styles.coin}
                      />
                      <Text style={styles.num}>{item.itemCost}</Text>
                    </View>
                  </View>
                )
              })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BCEAC',
    alignItems: 'center',
  },

  card: {
    flex: 1,

    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  exit: {
    height: 65,
    width: 65,
    alignSelf: 'flex-start',
  },
  num: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  coin: {
    width: 20,
    height: 20,
  },
  cost: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})
