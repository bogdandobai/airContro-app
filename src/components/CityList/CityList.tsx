import * as React from 'react';
import { View, SwipeableListView } from 'react-native';
import CityListItem from '../CityListItem/CityListItem';
import styles from './CityListStyle';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Images } from '../../themes';
import ImageText from '../ImageText';
import { UserCity } from "../../types/classes/user-city.class"


interface Props {
  data: UserCity[]
  onPress:(item: UserCity) => void;
  deleteUserCity:(cityId: number) => void
}

class CityList extends React.Component<Props> {
  listRef: SwipeableListView
  constructor(props:Props){
    super(props);
  }

  onPress=(item: UserCity)=>{
      this.props.onPress(item)
  }

  renderItem = ({item}: {item: UserCity }) => {
    return <CityListItem
      onPress={() => this.onPress(item)}
      item={item} 
    />
  };

  keyExtractor = (item: UserCity, index: number) => {
    return index.toString();
  };

  deleteCity = (data) => {
    this.props.deleteUserCity(data.item.id)
  }

  render() {
    return (
      <SwipeListView
        contentContainerStyle={styles.listContent}
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        renderHiddenItem={ (data, rowMap) => (
          <View style={styles.hiddenItem}>
              <ImageText
                onPress={this.setAsHome}
                image={Images.location}
              />
              <ImageText
                onPress={() => this.deleteCity(data)}
                image={Images.delete}
              />
          </View>
      )}
      previewRowKey={'0'}
      previewOpenDelay={1000}
      previewOpenValue={-100}
      disableRightSwipe={true}
      leftOpenValue={75}
      rightOpenValue={-75}
        // ListHeaderComponent={this.renderHeaderComponent}
        // ListFooterComponent={this.renderFooterComponent}
        // ListEmptyComponent={this.renderEmpty}
        // ItemSeparatorComponent={this.renderItemSeparator}
      />
      )
    }
}

export default CityList
