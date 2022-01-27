import { StyleSheet, View, Text } from 'react-native'
import { getDatabase, ref, child, get } from 'firebase/database'
import { app, database } from '../firebase'
import { useState, useEffect } from 'react'
import shopItems from '../utils/dbref'

console.log(shopItems)
export const Shop = () => {
  const [itemList, setItemList] = useState([])

  useEffect(() => {
    const dbRef = ref(database)
    get(child(dbRef, `/Shop`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      setItemList(() => {
        const items = [];
        for (let key in snapshot.val()) {
          items.push(snapshot.val()[key])
        }
        return items
      })
      setItemList()
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
    <View style={styles.container}>
      <View>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
