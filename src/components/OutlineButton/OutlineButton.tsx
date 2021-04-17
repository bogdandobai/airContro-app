import * as React from 'react'
import { Text, TouchableOpacity, TextStyle } from 'react-native'
import styles from './OutlineButtonStyle'

export interface Props {
  text: string
  onPress: () => void
  textStyle?: TextStyle
}

const OutlineButton = (props: Props) => {
  return (
    <TouchableOpacity
      style={{paddingLeft:5}}
      onPress={props.onPress}>
      <Text style={[styles.text, props.textStyle]}>{props.text} </Text>
    </TouchableOpacity>
  )
}

export default OutlineButton