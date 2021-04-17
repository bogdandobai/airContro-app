import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './IndexValueStyle';
import { getColors } from '../../transforms/Utils';

export interface Props {
  index: number
}


class IndexValue extends React.PureComponent <Props> {
  constructor(props:Props){
    super(props);
  }
  
  public render() {
    const data = getColors(this.props.index);
    return (
      <View style={[styles.container,{backgroundColor: data.backgroundColor}]}>
        <Text style={[styles.text,{color: 'white'}]}>{data.value}</Text>
      </View>
    );
  }
}
export default IndexValue;
