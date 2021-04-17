import * as React from 'react';
import { Text, TouchableOpacity, Image, TextStyle } from 'react-native';
import styles from './ImageTextStyle';
import { Metrics } from '../../themes';

export interface Props {
  image: number
  text?: string
  textStyle?: TextStyle
  onPress?: () => void
}


class ImageText extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
  }
  
  onPress = () => {
    this.props.onPress()
  }

  public render() {
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={styles.container}>
        <Image
          resizeMode={'stretch'}
          style={{width: Metrics.moderateScale._20, height: Metrics.moderateScale._20}}
          source={this.props.image} />
        <Text style={[styles.text,this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
export default ImageText;
