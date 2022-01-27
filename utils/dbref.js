import { ref, child, get } from 'firebase/database'
import { database } from '../firebase'

const dbRefShop = ref(database)

const shopItems = get(child(dbRefShop, `/Shop`))
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

export default shopItems
