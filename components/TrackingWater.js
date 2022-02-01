import { useEffect, useState, useContext } from 'react'
import {
  View,
  ImageBackground,
  Text,
  Pressable,
  TextInput,
  Image,
  Button,
  StyleSheet,
} from 'react-native'
import { getCurrentDate } from '../utils/utils'
import { patchUserWater } from '../utils/dbCalls'
import { UserContext } from '../contexts/User'

export const TrackingWater = ({ navigation, route }) => {
  const [cupCount, setCupCount] = useState(0)
  const { currUser, setCurrUser } = useContext(UserContext)
  useEffect(() => {
    patchUserWater(currUser.userId, cupCount, currUser.wallet)
    setCurrUser((curr) => {
      return { ...curr, wallet: curr.wallet + 1 }
    })
    // console.log(currUser);
  }, [cupCount])

  const addCup = () => {
    setCupCount((currentCup) => {
      if (cupCount === 8) {
        return cupCount
      } else {
        const newCupCnt = currentCup + 1
        return newCupCnt
      }
    })
  }

  const lessCup = () => {
    setCupCount((currCup) => {
      if (currCup === 0) {
        return currCup
      } else {
        const newCup = currCup - 1
        return newCup
      }
    })
  }
  console.log(cupCount)
  const howMoist = (cupCount) => {
    const twatArray = []
    for (let x = 1; x <= cupCount; x++) {
      twatArray.push(<View style={styles.waterBox} key={x} />)
    }
    if (twatArray.length >= 8) {
      return twatArray
    } else return twatArray
  }

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{getCurrentDate()}</Text>
      </View>
      <View style={styles.glassCnt}>
        {howMoist(cupCount).map((div) => div)}
      </View>
      <View style={styles.glassBtm} />
      <Text style={styles.cupCount}>{cupCount}</Text>
      <View style={styles.buttonz}>
        <Pressable onPress={lessCup}>
          <Image
            source={require('../img_assets/close.png')}
            style={styles.minus}
          />
        </Pressable>
        <Pressable onPress={addCup}>
          <Image
            source={require('../img_assets/check-circle-solid.png')}
            style={styles.plus}
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  glassCnt: {
    width: 250,
    height: 408,
    borderColor: 'skyblue',
    borderWidth: 3,
    borderTopWidth: 0,
    borderBottomWidth: 0,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  glassBtm: {
    width: 250,
    height: 48,
    borderColor: 'skyblue',
    borderWidth: 3,
    borderTopWidth: 0,
    borderBottomLeftRadius: 100 / 2,
    borderBottomRightRadius: 100 / 2,
    backgroundColor: 'skyblue',
    marginBottom: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd23f',
  },
  waterBoxStart: {
    width: 250,
    height: 48,
    backgroundColor: 'skyblue',
    opacity: 1,
    marginTop: 1,
    borderBottomLeftRadius: 3 / 20,
    borderBottomRightRadius: 3 / 20,
    borderColor: 'skyblue',
  },
  waterBox: {
    width: 250,
    height: 48,
    backgroundColor: 'skyblue',
    opacity: 1,
    marginTop: 1,
    marginBottom: 1,
    borderWidth: 3,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'skyblue',
  },
  buttonz: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
  },
  plus: {
    fontSize: 40,
    backgroundColor: 'green',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    color: '#fff',
  },
  minus: {
    fontSize: 40,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    color: '#fff',
  },
  date: {
    fontSize: 20,
  },
  cupCount: {
    fontSize: 20,
  },
})
