import * as React from "react"
import { View } from "react-native"
import styles from "./SearchBarStyle"
import {Searchbar} from "react-native-paper"

export interface Props {
  onBack:() => void
  onChangeSearch:(search: string) => void
}

export interface State {
  search: string
}

class SearchBar extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { search: "" }
  }

  onChangeSearch = (search: string) => {
    this.setState({ search })
    this.props.onChangeSearch(search)
  }

  onBack = () => {
    this.props.onBack()
  }

  // TODO CHANGE ANIMATION

  public render() {
    return (
      <View style={styles.container}>
        <Searchbar
          style={null}
          inputStyle={null}
          value={this.state.search}
          theme={{roundness:10}}
          onChangeText={this.onChangeSearch}
        />
      </View>
    )
  }
}
export default SearchBar
