import * as React from "react"
import { View } from "react-native"
import { connect } from "react-redux"
import * as Redux from "redux"
import * as Types from "../../store/state"
import * as fromStore from "../../store"
import SearchList from "../../components/SearchList"
import SearchHeader from "../../components/SearchHeader"
import NavigationService from "../../navigation/NavigationService"
import { SafeAreaView } from "react-navigation"
import { City } from "../../types/classes"

import styles from "./SearchStyle"
import { UserCity } from "../../types/classes/user-city.class"
/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  changeSearch: (search: string) => void
  filterCities: (index: string) => void
  loadCities: () => void
  addUserCity: (city: City) => void
  selectCity: (city : City) => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  cities: City[]
  userCities: UserCity[]

}

type Props = StateProps & DispatchProps & OwnProps

class Search extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props)
  }

  onBack = () => {
    NavigationService.navigateBack()
  }

  changeSearch = (search: string) => {
    this.props.changeSearch(search)
  }

  filterCities = (index: string) => {
    this.props.filterCities(index)
    this.props.loadCities()
  }

  addUserCity = (city: City) => {
    this.props.addUserCity(city)
  }

  selectCity = (city: City) => {
    this.props.selectCity(city)
  }

  public render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <SearchHeader
            onChangeSearch={this.changeSearch}
            onBack={this.onBack}
             onFilterCities={this.filterCities}
          />
          <SearchList
            showUserCities={true}
            onSelectCity={this.selectCity}
            onAddUserCity={this.addUserCity}
            userCities={this.props.userCities}
            data={this.props.cities}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state: Types.RootState, ownProps: Props): StateProps => {
  return {
    cities: fromStore.selectCities(state),
    userCities: fromStore.selectUserCities(state)
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<Types.RootAction>): DispatchProps =>
  Redux.bindActionCreators(
    {
      changeSearch: (search: string) => fromStore.citiesActions.changeSearch(search),
      filterCities: (index: string) => fromStore.citiesActions.filterCities(index),
      loadCities: () => fromStore.citiesActions.loadCities(),
      addUserCity:(city: City) => fromStore.citiesActions.addUserCity(city),
      selectCity:(city: City) => fromStore.citiesActions.selectCity(city)
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)
