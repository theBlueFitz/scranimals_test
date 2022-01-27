import { StyleSheet, ScrollView, Text, Image } from 'react-native'
import { getDatabase, ref, child, get } from 'firebase/database'
import { app, database } from '../firebase'
import { useState, useEffect } from 'react'
import shopItems from '../utils/dbref'
import { ShopItemCard } from './ShopItemCard'

console.log(shopItems)
export const Shop = () => {
  const [itemList, setItemList] = useState([])
  const [isLoading, setIsLoading] =useState(true);

  useEffect(() => {
    setIsLoading(true)
    const dbRef = ref(database)
    get(child(dbRef, `/Shop`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      setItemList(() => {
        const items = [];
        for (let key in snapshot.val()) {
          items.push(snapshot.val()[key])
        }
        setIsLoading(false);
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

  console.log(itemList)

  return (
    <ScrollView style={styles.container}>
      {isLoading ? null : itemList.map((item, index) => {
        return <ShopItemCard item={item} key={index} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
