import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './IndexListItemStyle';
import { Colors } from "../../themes"
import { getColors } from "../../transforms/Utils"

interface Props {
  item:any
}

class IndexListItem extends React.PureComponent<Props> {
  constructor(props:Props){
    super(props);
  }


  public render() {
    return (
      <View
        style={styles.filter}
      >
        <View style={[styles.indexStyle, { backgroundColor: getColors(20).primaryColor }]} >
        <Text>{'10'}</Text>
        </View>
        <Text>NO2</Text>

      </View>
    );
  }
}
export default IndexListItem;
