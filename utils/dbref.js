import { ref, child, get } from 'firebase/database'
import { database } from '../firebase'

const dbRef = ref(database)

const shopItems = get(child(dbRef, `/Shop`))
  .then((snapshot) => {
    console.log(snapshot)
    if (snapshot.exists()) {
      console.log(snapshot.val())
    } else {
      console.log('No data available')
    }
  })
  .catch((error) => {
    console.error
  })

const pets = get(child(dbRef, `/Pets`))
  .then((snapshot) => {
    console.log(snapshot)
    if (snapshot.exists()) {
      console.log(snapshot.val())
    } else {
      console.log('No data available')
    }
  })
  .catch((error) => {
    console.error
  })

console.log(pets)

export default shopItems
