import * as React from "react"
import { Switch, View, Text } from "react-native"
import { Colors } from "../../themes"
import styles from "./NotificationListItemStyle"
import { UserCity } from "../../types/classes/user-city.class"

interface Props {
  item: UserCity
  toggleSubscription: (item: UserCity) => void
}

interface State{
  enabled: boolean
}

class NotificationListItem extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state={enabled: this.props.item.notifications}
  }

  toggleValue = () => {
    this.props.toggleSubscription(this.props.item)
    this.setState({enabled: !this.state.enabled})
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.item.city.name}</Text>
        <Switch
          trackColor={{ false: Colors.gray, true: Colors.lightBlue }}
          thumbColor={Colors.white}
          onValueChange={this.toggleValue}
          value={this.state.enabled}
        />
      </View>
    )
  }
}
export default NotificationListItem
