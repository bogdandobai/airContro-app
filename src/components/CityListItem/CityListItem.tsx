import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './CityListItemStyle';
import { City } from '../../types/classes';
import IndexValue from '../IndexValue';
import IndexProgress from '../IndexProgress';
import { UserCity } from "../../types/classes/user-city.class"

interface Props {
  item: UserCity
  onPress: (item: UserCity) => void;
}

class CityListItem extends React.PureComponent<Props> {
  constructor(props:Props){
    super(props);
  }

  onPress = () => {
    this.props.onPress(this.props.item)
  }

  public render() {
    const item = {...this.props.item}
    return (
      <TouchableOpacity 
      activeOpacity={1}
      onPress={this.onPress}
      style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.title}>
            <Text style={styles.name}>{item.city.name}</Text>
            <IndexValue index={item.city.index}/>
          </View>
          <View style={styles.data}>
            <IndexProgress index={item.city.index}/>
          </View>
        </View>
       </TouchableOpacity>
    );
  }
}
export default CityListItem;
