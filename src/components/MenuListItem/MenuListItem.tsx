import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './MenuListItemStyle';
import LottieView from "lottie-react-native"

interface Props {
  item:string
  onPress:(item: string) => void;
}

class MenuListItem extends React.PureComponent<Props> {
  constructor(props:Props){
    super(props);
  }

  onPress = () => {
    this.props.onPress(this.props.item);
  }

  get animation(){
    return this.props.item==='Location' ? require('../../images/animations/location.json') :
    this.props.item==='Board' ? require('../../images/animations/graphs.json')  :
      require('../../images/animations/docs.json')
  }

  public render() {

    return (
      <TouchableOpacity 
      onPress={this.onPress}
      style={styles.container}>
        <View style={{ flex:0.9 }}>
          <LottieView
            style={{width:'100%',height:'100%'}}
            source={this.animation}
            autoPlay={true}
            resizeMode={'contain'}
          />
        </View>
        <Text style={{fontSize: 14, fontWeight:'bold', marginTop: 10}}>{this.props.item}</Text>
      </TouchableOpacity>
    );
  }
}
export default MenuListItem;
