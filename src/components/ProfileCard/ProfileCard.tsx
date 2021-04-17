import * as React from 'react';
import { TouchableOpacity, View, Text } from "react-native"
import styles from './ProfileCardStyle';
import LottieView from "lottie-react-native"

export interface Props {
  source: any
  title: string
  onPress:()=> void
}


class ProfileCard extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
}

  onPress = () => {
    this.props.onPress()
  }

  public render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.onPress}
        style={styles.container}>
        <View style={styles.contentContainer}>
          <LottieView
            style={{width:'90%',height:'90%'}}
            source={this.props.source}
            autoPlay={true}
            resizeMode={'contain'}
          />
        </View>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}
export default ProfileCard;
