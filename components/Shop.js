import {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  Pressable,
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
    <ScrollView style={styles.container}>
      <Pressable
        style={styles.exitButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.x}>X</Text>
      </Pressable>
      <View style={styles.wrapper}>
        <View style={styles.card}>
          {isLoading
            ? null
            : itemList.map((item, index) => {
                return (
                  <ShopItemCard
                    item={item}
                    key={index}
                    navigation={navigation}
                  />
                )
              })}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#3BCEAC',
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    margin: 10,
  },
  exitButton: {
    width: 40,
    height: 40,
    borderRadius: 100 / 2,
    backgroundColor: '#EE4266',
    justifyContent: 'center',
  },
  x: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center',
    justifySelf: 'center',
  },
})
