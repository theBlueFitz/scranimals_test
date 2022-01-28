import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native-web'
import Popover, { Rect } from 'react-native-popover-view'
import { useState } from 'react'
import * as RouteNavigation from '../routeNavigation'

export const NavMenu = () => {
  const [popover, setPopover] = useState(false)

  return (
    <View style={styles.container}>
      <Image
        source={require('../img_assets/wallet-solid.svg')}
        style={styles.wallet}
      />

      <TouchableOpacity
        onPress={() => {
          setPopover(true)
          console.log('clicked once')
        }}
      >
        <Image
          source={require('../img_assets/bars-solid.svg')}
          style={styles.hamburger}
        />
      </TouchableOpacity>

      <Popover
        isVisible={popover}
        onRequestClose={() => {
          console.log('firing function?')
          setPopover(false)
        }}
      >
        <View style={styles.popoverWrapper}>
          <View
            style={styles.popover}
            onPress={() => {
              if (popover === false) {
                setPopover(true)
              } else if (popover === true) {
                setPopover(false)
              }
            }}
          >
            <Pressable
              style={styles.navButton}
              onPress={() => {
                setPopover(false)
                RouteNavigation.navigate('LoginForm')
              }}
            >
              <Text style={styles.navText}>My Scranimal</Text>
            </Pressable>
            <Pressable style={styles.navButton}>
              <Text
                style={styles.navText}
                onPress={() => {
                  setPopover(false)
                  RouteNavigation.navigate('TrackingWater')
                }}
              >
                Track Water
              </Text>
            </Pressable>
            <Pressable style={styles.navButton}>
              <Text style={styles.navText}>Track Food</Text>
            </Pressable>
            <Pressable style={styles.navButton}>
              <Text
                style={styles.navText}
                onPress={() => {
                  setPopover(false)
                  RouteNavigation.navigate('Shop')
                }}
              >
                Pet Shop
              </Text>
            </Pressable>
            <Pressable
              style={styles.navButton}
              onPress={() => {
                setPopover(false)
                RouteNavigation.navigate('Home')
              }}
            >
              <Text style={styles.navText}>My Inventory</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => {
              console.log('function firing properly')
              setPopover(false)
            }}
          >
            <Image
              source={require('../img_assets/times-circle-solid.svg')}
              style={styles.exit}
            />
          </Pressable>
        </View>
      </Popover>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: '#3BCEAC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wallet: {
    marginLeft: 15,
    height: 40,
    width: 40,
  },

  popover: {
    backgroundColor: '#3BCEAC',
  },
  navButton: {
    height: 60,
    marginTop: 5,
  },
  navText: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 4,
  },
  exit: {
    height: 65,
    width: 65,
    alignSelf: 'center',
  },

  hamburger: {
    height: 40,
    width: 40,
    color: '#fff',
    marginRight: 15,
  },
})
