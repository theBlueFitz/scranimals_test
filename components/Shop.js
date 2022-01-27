import { StyleSheet, View, Text } from 'react-native'
import { getDatabase, ref, child, get } from 'firebase/database'
import { app, database } from '../firebase'
import { useState } from 'react'
import shopItems from '../utils/dbref'

console.log(shopItems)
export const Shop = () => {
  const [itemList, setItemList] = useState([])

  return (
    <View style={styles.container}>
      <View>
        <Text>Here be shiz</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
