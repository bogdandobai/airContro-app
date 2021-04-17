import * as React from 'react';
import { TouchableOpacity, Image, View , Animated} from 'react-native';
import styles from './HeaderButtonStyle';
import { Images } from '../../themes';

export interface Props {
  source: number
  onPress?: () => void
}

export interface State{
  animation: Animated.Value
}

class HeaderButton extends React.PureComponent<Props,State>{

  constructor(props:Props){
    super(props);
    this.state={animation: new Animated.Value(0)}
  }

  onPress = () => {
    this.props.onPress();
    this.state.animation.setValue(0);
    Animated.timing(this.state.animation,{
      toValue:1,
      duration:1000,
      useNativeDriver: true
    }).start();
  }

  public render(){
    // const opacity = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0,1],
    //   extrapolate:'clamp',
    // })
    // const item1X = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0,-50],
    //   extrapolate:'clamp',
    // })
    // const item1Y = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0,0],
    //   extrapolate:'clamp',
    // })
    // const item2X = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0,-30],
    //   extrapolate:'clamp',
    // })
    // const item2Y = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0,30],
    //   extrapolate:'clamp',
    // })
    // const item3X = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0,0],
    //   extrapolate:'clamp',
    // })
    // const item3Y = this.state.animation.interpolate({
    //   inputRange:[0,1],
    //   outputRange:[0,50],
    //   extrapolate:'clamp',
    // })
  return (
    <View style={{alignSelf:'center'}}>
    <TouchableOpacity
      style={styles.button}
      onPress={this.onPress}
      activeOpacity={0.7} 
      >
      <Image
        resizeMode={'contain'}
        source={this.props.source}
       />
    </TouchableOpacity>
    {/* <Animated.View style={[styles.animatedButton,{*/}
    {/*  opacity,*/}
    {/*  transform: [{translateX:item1X},{translateY: item1Y}]*/}
    {/*  }]}>*/}
    {/*  <TouchableOpacity>*/}
    {/*    <Image */}
    {/*    source={Images.delete}*/}
    {/*    style={styles.image}*/}
    {/*    />*/}
    {/*  </TouchableOpacity>*/}
    {/*</Animated.View>*/}
    {/*<Animated.View style={[styles.animatedButton,{*/}
    {/*  opacity,*/}
    {/*  transform: [{translateX:item2X},{translateY: item2Y}]*/}
    {/*  }]}>*/}
    {/*  <TouchableOpacity >*/}
    {/*    <Image */}
    {/*    source={Images.delete}*/}
    {/*    style={styles.image}*/}
    {/*    />*/}
    {/*  </TouchableOpacity>*/}
    {/*</Animated.View>*/}
    {/*<Animated.View style={[styles.animatedButton,{*/}
    {/*  opacity,*/}
    {/*  transform: [{translateX:item3X},{translateY: item3Y}]*/}
    {/*  }]}>*/}
    {/*  <TouchableOpacity>*/}
    {/*    <Image*/}
    {/*     source={Images.delete}*/}
    {/*     style={styles.image}*/}
    {/*     />*/}
    {/*  </TouchableOpacity>*/}
    {/*</Animated.View>*/}
    </View>

  )
}
}

export default HeaderButton