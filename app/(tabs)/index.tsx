import { useRef } from 'react'

import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'
// import Rive, { Alignment, Fit, RiveRef } from 'rive-react-native'

export default function TabOneScreen() {
  // console.log(Rive)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {/* <Rive
        url='https://cdn.rive.app/animations/vehicles.riv'
        fit={Fit.Contain}
        alignment={Alignment.Center}
        artboardName={'Truck'}
        style={{ width: 200, height: 200 }}
        autoplay={true}
      /> */}
      {/* <Rive resourceName='avatars' /> */}
      {/* <Rive
        fit={Fit.Contain}
        alignment={Alignment.Center}
        autoplay={true}
        animationName='idlePreview'
        resourceName={'avatars'}
      /> */}
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
