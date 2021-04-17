import * as React from 'react';
import { Text, View } from "react-native";
import styles from './AuthTitleStyle';
import OutlineButton from '../OutlineButton';

export interface Props {
  title: string
  question?: string
  button?: string
  onPress?: () => void;
}


class AuthTitle extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
  }
  
  onPress = () => {
    this.props.onPress();
}

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.question}>{this.props.question}</Text>
          <OutlineButton
          textStyle={styles.button}
          text={this.props.button}
          onPress={this.onPress}
          />
        </View>
      </View>
    );
  }
}
export default AuthTitle;
