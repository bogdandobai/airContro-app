import * as React from "react"
import { Animated } from "react-native"
import styles from "./AnimatedMarkerStyle"
import PrimaryButton from "../PrimaryButton"
import { City } from "../../types/classes"

export interface Props {
  city?: City
}

export interface State {
  animation: Animated.Value
}

class AnimatedMarker extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
       animation: new Animated.Value(0) 
      }
  }

  onPress = () => {
    this.state.animation.setValue(0)
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 750,
    }).start()
  }

  onClose = () => {
    this.state.animation.setValue(1)
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 750,
    }).start()
  }

  renderCityDetails = () =>{
    return null;
  }

  public render() {
    const buttonY = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-20, 0],
      extrapolate: "clamp",
    })
    const buttonX = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-20, 0],
      extrapolate: "clamp",
    })
    const buttonHeight = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 12],
      extrapolate: "clamp",
    })

    const buttonWidth = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 15],
      extrapolate: "clamp",
    })
    return (
      <Animated.View
        style={{
          position: "absolute",
          transform: [{ scaleX: buttonWidth }, { scaleY: buttonHeight }],
          top: buttonY,
          right: buttonX,
        }}
      >
        <PrimaryButton
          round={true}
          onPress={this.onClose}
          title={"NO2 : 28"}
          gradientStyle={styles.gradient}
        />
        {this.renderCityDetails}
      </Animated.View>
    )
  }
}
export default AnimatedMarker
