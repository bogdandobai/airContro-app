import React from "react"
import { View, TouchableOpacity } from "react-native"
import styles from "./MapStyle"
import MapView, { Marker } from "react-native-maps"
import { Region } from "../../types/interfaces"
import Modal from "react-native-modalbox"
import LottieView from "lottie-react-native"
import { City } from "../../types/classes"
import { getColors } from "../../transforms/Utils"
import {Searchbar} from "react-native-paper"
import SearchList from "../SearchList"
import HeaderButton from "../HeaderButton"
import { Images } from "../../themes"
import NavigationService from "../../navigation/NavigationService"


export interface Props {
  cities: City[]
  changeSearch: (search: string) => void
}

export interface State {
  region: Region
  isOpen: boolean
  search: string
}

class Map extends React.PureComponent<Props, State> {
  private lottieRef: LottieView
  private mapRef: MapView
  constructor(props: Props) {
    super(props)
    this.state = { region: null, isOpen: false, search: '' }
  }

  onPress = () => {
    return null
  }

  closeModal = () => {
    this.setState({ isOpen: false })
    this.lottieRef.reset()
  }

  openModal = () => {
    if (!this.state.isOpen) {
      this.setState({ isOpen: true })
      this.lottieRef.play()
    } else {
      this.props.changeSearch('')
      this.closeModal()
    }
  }

  gotoCity = (city:City) => {
    this.setState({isOpen:false})
    this.mapRef.animateToCoordinate({latitude: city.latitude,longitude: city.longitude})
  }

  changeSearch = (search: string) => {
    this.setState({search})
    this.props.changeSearch(search)
  }

  renderModal = () => {
    return (
      <Modal
        isOpen={this.state.isOpen}
        style={styles.modal}
        onClosed={this.closeModal}
        position={"bottom"}
      >
        <Searchbar
          style={{marginBottom: 10, borderTopLeftRadius:10, borderTopRightRadius:10}}
          onChangeText={this.changeSearch}
          value={this.state.search}
        />
        <SearchList
          onSelectCity={this.gotoCity}
          showUserCities={false}
          data={this.props.cities}
        />
      </Modal>
    )
  }

  renderMarkers = () => {
    return this.props.cities.map((city: City, index: number) =>{
      return(
        <Marker
          key={index}
          coordinate={{
            latitude: city.latitude,
            longitude: city.longitude,
          }}
          onPress={this.onPress}
          pinColor={getColors(city.index).primaryColor}
        />
      )})
  }

  public render() {
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => this.mapRef = ref}
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 46.770439,
            longitude: 23.591423,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          {this.renderMarkers()}
        </MapView>
        {/*<AnimatedMarker ref={ref => (this.animatedMarkerRef = ref)} />*/}
        <View style={styles.backButton}>
        <HeaderButton
          onPress={()=>{
            this.props.changeSearch('')
            NavigationService.navigateBack()
          }}
          source={Images.ic_close}
        />
        </View>
        <TouchableOpacity
          onPress={this.openModal}
          style={styles.animationContainer}
        >
          <LottieView
            ref={ref => (this.lottieRef = ref)}
            autoPlay={false}
            source={require("../../images/animations/searchToBack.json")}
          />
        </TouchableOpacity>
        {this.renderModal()}
      </View>
    )
  }
}
export default Map
