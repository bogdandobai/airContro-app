import * as React from 'react';
import { FlatList } from 'react-native';
import MenuListItem from '../MenuListItem/MenuListItem';
import styles from './MenuListStyle';
import NavigationService from '../../navigation/NavigationService';


interface Props {
  data: any[];
  onPress: (item: any) => void
}

class MenuList extends React.Component<Props> {
  constructor(props:Props){
    super(props);
  }

  onPress = (item: string) => {
    NavigationService.navigate(item)
    this.props.onPress(item)
  }

  renderItem = ({item}: {item: string }) => {
    return <MenuListItem
    onPress={this.onPress}
    item={item}/>
  };
  keyExtractor = (item: string, index: number) => {
    return index.toString();
  };

  render () {
    return (
      <FlatList
        contentContainerStyle={styles.listContent}
        horizontal={true}
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
      )
    }
}

export default MenuList
