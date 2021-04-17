import React from "react"
import { ImageBackground,View } from "react-native"
import { connect } from "react-redux"
import * as Redux from "redux"
import * as Types from "../../store/state"
import styles from "./HomeStyle"
import { Images } from "../../themes"
import CityList from "../../components/CityList"
import { City, User } from "../../types/classes"
import NavigationService from "../../navigation/NavigationService"
import MenuList from "../../components/MenuList"
import * as fromStore from "../../store"
import { UserCity } from "../../types/classes/user-city.class"
import firebase from "react-native-firebase"

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  loadCities: () => void
  loadUserCities: () => void
  selectCity: (city: City) => void
  deleteCity: (cityId: number) => void
  loadMessages: () => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  cities: City[]
  userCities: UserCity[]
  user: User
}

export interface State {
  modalVisible: boolean
  item: City
}

type Props = StateProps & DispatchProps & OwnProps

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { modalVisible: false, item: null }
  }

  componentDidMount() {
    this.props.loadCities()
    this.props.loadUserCities()
    firebase.notifications().onNotification((notification) => {
      if(notification.data.type === 'chat' && notification.data.user !== this.props.user.id.toString()){
          this.props.loadMessages()
      }
    })
  }

  closeModal = () => {
    this.setState({ modalVisible: false })
  }

  setAsHome = () => {
    this.closeModal()
    return null // use this.state.city
  }

  deleteCity = (cityId: number) => {
    this.props.deleteCity(cityId)
  }

  onSelectCity = (item: UserCity) => {
    this.props.selectCity(item.city)
  }

  onPress = (item: any) => {
    NavigationService.navigate(item)
  }

  public render() {
    return (
      <ImageBackground source={Images.header} style={styles.container}>
        <View style={{ flex: 1 }}>
          <MenuList onPress={this.onPress} data={['Location','Docs','Board']} />
        </View>
        <View style={{ flex: 1 }}>
          <CityList
            deleteUserCity={this.deleteCity}
            onPress={this.onSelectCity}
            data={this.props.userCities}
          />
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state: Types.RootState, ownProps: Props): StateProps => {
  return {
    cities: fromStore.selectCities(state),
    userCities: fromStore.selectUserCities(state),
    user: fromStore.selectUser(state)
  }
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<Types.RootAction>): DispatchProps | any =>
  Redux.bindActionCreators(
    {
      loadCities: () => fromStore.citiesActions.loadCities(),
      loadUserCities: () => fromStore.citiesActions.loadUserCities(),
      selectCity: (city: City) => fromStore.citiesActions.selectCity(city),
      deleteCity: (cityId: number) => fromStore.citiesActions.deleteCity(cityId),
      loadMessages: fromStore.messagesActions.loadMessages,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
