import * as React from "react"
import { View, FlatList } from "react-native"
import SearchListItem from "../SearchListItem/SearchListItem"
import styles from "./SearchListStyle"
import { City } from "../../types/classes"
import { UserCity } from "../../types/classes/user-city.class"
import { Snackbar } from "react-native-paper"
import { Colors } from "../../themes"

interface Props {
  data: City[]
  userCities?: UserCity[]
  onAddUserCity?: (city: City) => void
  onSelectCity: (city: City) => void
  showUserCities?: boolean
}

interface State{
  showSnackBar: boolean
}

class SearchList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state={showSnackBar:false}
  }

  onSelectCity = (currentCity: City) => {
      this.props.onSelectCity(currentCity)
  }

  onAddCity = (currentCity: City) => {
    if(!this.props.userCities.find(userCity => userCity.city.id === currentCity.id)){
       this.props.onAddUserCity(currentCity);
    }else{
      this.setState({showSnackBar: true})
  }
  }

  renderItem = ({ item }: { item: City }) => {
    return <SearchListItem
      onAddCity={this.onAddCity}
      onSelectCity={this.onSelectCity}
      item={item}
      showUserCities={this.props.showUserCities}
    />
  }

  renderItemSeparator = () => {
    return <View style={styles.separator} />
  }

  keyExtractor = (item: any, index: number) => {
    return index.toString()
  }

  renderSnackBar = () =>{
    return(
      <Snackbar
        visible={this.state.showSnackBar}
        duration={3500}
        onDismiss={()=>{this.setState({showSnackBar:false})}}
        style={{backgroundColor: Colors.pinkShade}}
        theme={{colors:{accent:'white' },roundness: 10}}
        action={{
          label: 'Ok',
          onPress: () => {this.setState({showSnackBar: false})},
        }}
      >
        City is already in your list
      </Snackbar>
    )
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
        {this.renderSnackBar()}
      </View>
    )
  }
}

export default SearchList
