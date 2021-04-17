import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import styles from './IndexProgressStyle';
import { getColors } from '../../transforms/Utils';
import Colors from '../../themes/Colors'

export interface Props {
  index: number
}



class IndexProgress extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
  }
  state = { animation: new Animated.Value(0) }
  
  componentDidMount() {
    this.state.animation.setValue(0);
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 750,
    }).start();
  }

  public render() {
    const progressInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", `${this.props.index/2}%`],
      extrapolate: 'clamp'
    })

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 0],
      outputRange: [Colors.white, getColors(this.props.index).primaryColor ]
    })

    const progressStyle = {
      width: progressInterpolation,
      bottom: 0,
      backgroundColor: colorInterpolation
    }
    return (
      <View style={styles.border}>
          {/* <View style={StyleSheet.absoluteFill}>
          <View style={[styles.progress, {
            bottom: 0,
            width: `${this.props.index/1.5}%`,
            backgroundColor: getColors(this.props.index).primaryColor,
          }]}
          />
          </View> */}
        <View style={StyleSheet.absoluteFill}>
            <Animated.View style={[styles.progress, progressStyle]}/>
          </View>
        </View>
    );
  }
}
export default IndexProgress;
