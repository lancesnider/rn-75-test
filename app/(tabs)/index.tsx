import { useEffect, useRef } from 'react'

import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'
import firebase from '@react-native-firebase/app'

import Rive, { Alignment, Fit, RiveRef } from 'rive-react-native'

const credentials = {
  clientId: '',
  appId: '',
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
}

const config = {
  name: 'SECONDARY_APP',
}

export default function TabOneScreen() {
  useEffect(() => {
    const initFirebase = async () => {
      await firebase.initializeApp(credentials, config)
    }
    try {
      initFirebase()
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Rive
        url='https://cdn.rive.app/animations/vehicles.riv'
        fit={Fit.Contain}
        alignment={Alignment.Center}
        artboardName={'Truck'}
        style={{ width: 200, height: 200 }}
        autoplay={true}
      />
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='app/(tabs)/index.tsx' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
