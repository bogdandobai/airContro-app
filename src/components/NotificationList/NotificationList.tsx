import * as React from "react"
import { View, FlatList } from "react-native"
import styles from "./NotificationListStyle"
import { UserCity } from "../../types/classes/user-city.class"
import NotificationListItem from "../NotificationListItem"

interface Props {
  data: UserCity[]
  toggleSubscription:(item: UserCity) => void
}

class NotificationList extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  toggleSubscription = (city: UserCity) => {
    this.props.toggleSubscription(city)
  }

  renderItem = ({ item }: { item: UserCity }) => {
    return <NotificationListItem
      toggleSubscription={this.toggleSubscription}
      item={item}
    />
  }

  renderItemSeparator = () => {
    return <View style={styles.separator} />
  }

  keyExtractor = (item: any, index: number) => {
    return index.toString()
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          extraData={this.props}
          contentContainerStyle={styles.listContent}
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderItemSeparator}
        />
      </View>
    )
  }
}

export default NotificationList
