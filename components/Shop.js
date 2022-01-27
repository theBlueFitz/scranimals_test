import { StyleSheet, View, Text } from 'react-native'
import { getDatabase, ref, child, get } from 'firebase/database'
import { app, database } from '../firebase'
import { useState } from 'react'

// const db = getDatabase().ref('/users')
// ;('https://scranimals-test-default-rtdb.europe-west1.firebasedatabase.app/')
console.log(app.options)
export const Shop = () => {
  const [itemList, setItemList] = useState([])
  //   const dbRef = ref(getDatabase(app))
  //   get(child(dbRef, `Shop`)).then((res) => {
  //     console.log(res)
  //   })

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
