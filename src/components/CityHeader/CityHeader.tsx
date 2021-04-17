import * as React from 'react';
import { Text, TouchableOpacity, View } from "react-native"
import styles from './CityHeaderStyle';
import { City } from "../../types/classes"
import { Colors, Images } from "../../themes"

export interface Props {
  city: City
}


class CityHeader extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
}
  public render() {
    return (
      <View
        style={styles.container}>
        <Text style={styles.city}>{(this.props.city.name)}</Text>
        <View
          style={styles.filter}
        >
          <View style={[styles.indexStyle, { backgroundColor: Colors.pink }]} />
          <Text>{"mid"}</Text>
        </View>
        <View
          style={styles.filter}
        >
          <View style={[styles.indexStyle, { backgroundColor: Colors.pink }]} />
          <Text>{"mid"}</Text>
        </View>
      </View>
    );
  }
}
export default CityHeader;
