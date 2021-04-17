import * as React from 'react';
import { FlatList } from 'react-native';
import BoardListItem from '../BoardListItem/BoardListItem';
import styles from './BoardListStyle';
import { City } from "../../types/classes"
import { Metrics } from "../../themes"


interface Props {
  data: City[];
}

class BoardList extends React.Component<Props> {
  constructor(props:Props){
    super(props);
  }

  renderItem = ({item}: {item: City }) => {
    return <BoardListItem item={item}/>
  };

  // renderHeaderComponent = () => {
  //   return (
  //     <View>
  //       <Text> - Header - </Text>
  //     </View>
  //   )
  // };
  //
  // renderFooterComponent = () => {
  //   return (
  //     <View>
  //       <Text> - Footer - </Text>
  //     </View>
  //     );
  //   };
  //
  // renderEmpty = () => {
  //   return (
  //     <View>
  //       <Text> - Empty - </Text>
  //     </View>
  //     );
  //   };
  //
  // renderItemSeparator = () => {
  //   return (
  //     <View>
  //       <Text> - Separator - </Text>
  //     </View>
  //   );
  // };

  keyExtractor = (item: City, index: number) => {
    return index.toString();
  };

  render () {
    return (
      <FlatList
        style={{marginTop: Metrics.moderateScale._50}}
        contentContainerStyle={styles.listContent}
        data={this.props.data}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        // ListHeaderComponent={this.renderHeaderComponent}
        // ListFooterComponent={this.renderFooterComponent}
        // ListEmptyComponent={this.renderEmpty}
        // ItemSeparatorComponent={this.renderItemSeparator}
      />
      )
    }
}

export default BoardList
