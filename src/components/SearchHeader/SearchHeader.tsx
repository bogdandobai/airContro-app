import * as React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import styles from "./SearchHeaderStyle"
import SearchBar from "../SearchBar"
import { Colors } from "../../themes"

export interface Props {
  onBack: () => void
  onChangeSearch: (search: string) => void
  onFilterCities:(index: string) => void
}

class SearchHeader extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  onBack = () => {
    this.props.onBack()
  }

  onChangeSearch = (search: string) => {
    this.props.onChangeSearch(search)
  }

  onFilterCities = (index: string) => {
    this.props.onFilterCities(index)
  }

// TODO maybe change to some enum

  public render() {
    return (
      <View style={styles.container}>
        <SearchBar onChangeSearch={this.onChangeSearch} onBack={this.onBack} />
        <View style={styles.filterWrapper}>
          <TouchableOpacity
            onPress={() => {
              this.onFilterCities('good')
            }}
            style={styles.filter}
          >
            <View style={[styles.indexStyle, { backgroundColor: Colors.lightBlue }]} />
            <Text>{"good"}</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => {
              this.onFilterCities('mid')
            }}
            style={styles.filter}
          >
            <View style={[styles.indexStyle, { backgroundColor: Colors.pink }]} />
            <Text>{"mid"}</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity
            onPress={() => {
              this.onFilterCities('bad')
            }}
            style={styles.filter}
          >
            <View style={[styles.indexStyle, { backgroundColor: Colors.purple }]} />
            <Text>{"bad"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default SearchHeader
