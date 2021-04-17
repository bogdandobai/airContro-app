import * as React from "react"
import { Text, TouchableOpacity, ViewStyle } from "react-native"
import styles from "./PrimaryButtonStyle"
import LinearGradient from "react-native-linear-gradient"
import { Colors, Metrics } from "../../themes"
import { City } from "../../types/classes"
export interface Props {
  title: string
  onPress: () => void
  round?: boolean
  style?: ViewStyle
  gradientStyle?: ViewStyle
  city?: City
}

class PrimaryButton extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  onPress = () => {
    this.props.onPress()
  }

  public render() {
    return (
      <TouchableOpacity
        style={this.props.round ? [styles.absoluteContainer, this.props.style] : {}}
        onPress={this.props.onPress}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.container,
            this.props.round ? [styles.round, this.props.gradientStyle] : {},
          ]}
          colors={[Colors.pink, Colors.purple, Colors.lightBlue]}
        >
          <Text style={[styles.text, this.props.round ? { fontSize: 24 } : {}]}>
            {this.props.title}
          </Text>  
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
export default PrimaryButton
