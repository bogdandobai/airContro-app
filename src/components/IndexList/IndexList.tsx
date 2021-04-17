import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import IndexListItem from '../IndexListItem/IndexListItem';
import styles from './IndexListStyle';


interface Props {
  data: any[];
}

class IndexList extends React.Component<Props> {
  constructor(props:Props){
    super(props);
  }

  renderItem = ({item}: {item: any }) => {
    return <IndexListItem item={item}/>
  };

  keyExtractor = (item: any, index: number) => {
    return index.toString();
  };

  render () {
    return (
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.listContent}
        numColumns={4}
        data={[10,20,30,10,20,30]}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
      )
    }
}

export default IndexList
