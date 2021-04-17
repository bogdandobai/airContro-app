import * as React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./SearchListItemStyle"
import { City } from "../../types/classes"
import { IconButton } from 'react-native-paper';
import { Colors } from "../../themes"

interface Props {
  item: City
  onSelectCity: (item: City) => void
  onAddCity: (item: City) => void
  showUserCities: boolean
}

class SearchListItem extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  onSelectCity = () => {
    this.props.onSelectCity(this.props.item)
  }

  onAddCity = () => {
    this.props.onAddCity(this.props.item)
  }

  public render() {
    const city = { ...this.props.item }
    return (
      <TouchableOpacity onPress={this.onSelectCity} style={styles.container}>
        <Text style={styles.text}>{city.name}</Text>
        {!!this.props.showUserCities && <IconButton
          icon="plus"
          color={Colors.black}
          size={20}
          onPress={this.onAddCity}
        />}
      </TouchableOpacity>
    )
  }
}
export default SearchListItem
