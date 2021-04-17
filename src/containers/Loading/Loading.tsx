import * as React from 'react';
import { View } from 'react-native';
import styles from './LoadingStyle';
import LottieView from "lottie-react-native"


export interface Props{

}

class Loading extends React.PureComponent <Props> {
  constructor(props){
  super(props)
  }

  public render() {
    return (
      <View style={styles.container}>
        <LottieView
          speed={10}
          autoPlay={true}
          source={require("../../images/animations/loading.json")}
        />
      </View>
    );
  }
}



export default (Loading)
