import * as React from 'react'
import { Image, View } from 'react-native'
import styles from './TabBarIconStyle'


const TabBarIcon = (iconName: number) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode={'contain'}
        source={iconName}
        style={styles.tabBarIcon} />
    </View>
  )
}

export default TabBarIcon
