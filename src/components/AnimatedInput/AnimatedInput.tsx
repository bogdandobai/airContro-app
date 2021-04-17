import * as React from 'react'
import { Text, TextInput, View, ViewStyle, TextInputProps, TextStyle, StyleSheet, Animated, Image } from 'react-native'
import styles from './AnimatedInputStyle'
import { Colors, Images } from '../../themes';

export interface Props extends TextInputProps {
  value: string
  label: string
  onChangeText?: (value: string) => void
  secureTextEntry?: boolean
  errorMessage?: boolean
  onBlur?: () => void
  onFocus?: () => void
  multiline?: boolean
  styleText?: TextStyle
  styleLabel?: TextStyle
  container?: ViewStyle
  onResetError?: () => void
  next?: AnimatedInput
  disabled?: boolean
}


class AnimatedInput extends React.Component<Props> {
  private inputRef: TextInput;
  state = {
    animation: new Animated.Value(0)
  }
   
  public blur() {
    this.onBlur()
  }

  public focus() {
    this.onFocus()
  }

  public onBlur = () => {
    this.inputRef.blur();
    if (!this.props.value){
      return null;
    } else{
    this.state.animation.setValue(0);
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 750,
    }).start();
  }
    if (this.props.next) {
      this.props.next.focus()
    }
  }

  public onFocus = () => {
    this.inputRef.focus();
    this.state.animation.setValue(0);
    if (this.props.onResetError) {
      this.props.onResetError()
    }
  }

  public showErrorMessage = () => {
    if (this.props.errorMessage && this.props.secureTextEntry) {
      return (
        <Text style={styles.text}>{'Invalid email or password'}</Text>
      )
    }
    return null;
  }

  public render() {
  
    const progressInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.disabled===true ? "100%" : "0%", "100%"],
      extrapolate: 'clamp'
    })

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 0],
      outputRange: [this.props.disabled===true ? Colors.lightBlue : Colors.white,Colors.lightBlue ]
    })

    const opacityInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.disabled===true ? 1 : 0, 1],
      extrapolate:'clamp'
    })

    const progressStyle = {
      width: progressInterpolation,
      bottom: 0,
      backgroundColor: colorInterpolation
    }

    const imageStyle = {
      opacity: opacityInterpolation
    }

    return (
      <View style={this.props.container}>
        <Text style={[styles.label, this.props.styleLabel]}>{this.props.label}</Text>
        <TextInput
          editable={!this.props.disabled}
          style={[styles.textInput, this.props.styleText, this.props.errorMessage ? styles.errorTextInput : {}]}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
          secureTextEntry={this.props.secureTextEntry}
          onSubmitEditing={this.props.onSubmitEditing}
          ref={ref => (this.inputRef = ref)}
          onBlur={this.onBlur}
          autoCorrect={false}
          onFocus={this.onFocus}
          autoCapitalize={'none'}
          multiline={this.props.multiline}
        />
        <Animated.View style={[styles.iconContainer,imageStyle]}>
          <Image
            style={styles.icon}
            source={Images.ic_check} />
          </Animated.View>
        <View style={styles.border}>
          <View style={StyleSheet.absoluteFill}>
            <Animated.View style={[styles.progress, progressStyle]}/>
          </View>
        </View>
        {this.showErrorMessage()}
      </View>

    )
  }
}

export default AnimatedInput
