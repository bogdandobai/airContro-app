import * as React from 'react';
import { ActivityIndicator, ImageBackground, View } from "react-native"
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import * as fromStore from '../../store';

import styles from './ShareStyle';
import ShareCard from "../../components/ShareCard"
import { City } from "../../types/classes"
import { Colors, Images } from "../../themes"

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  loadCities: () => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  cities: City[]
  loading: boolean
}

type Props = StateProps & DispatchProps & OwnProps;

export interface State {
  good: City
  bad: City
  new: City
}

class Share extends React.PureComponent <Props, State> {
  constructor(props:Props){
    super(props)
    this.state={good:null,bad:null,new:null}
  }
  componentDidMount() {
    this.props.loadCities()
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any){
    if(prevProps.loading !== this.props.loading){
      const cities = this.props.cities.sort((a, b) => a.index>b.index ? 1 : -1)
      const newest = this.props.cities.sort((a, b) => a.id>b.id ? 1 : -1)
      this.setState({
        new: newest[this.props.cities.length-1],
        good: cities[0],
        bad:cities[this.props.cities.length-1]
      })
    }
  }

  renderContent(){
    if(this.props.loading || this.state.new===null || this.state.good ===null || this.state.bad ===null){
      return <ActivityIndicator size={'large'} color={Colors.pink}/>
    }else{
      return(
        <View style={{flex:1}}>
          <ShareCard
            color={Colors.pinkShade}
            title={'Cleanest city right now'}
            description={`The cleanest city is ${this.state.good.name}. The Air Quality Index is only ${this.state.good.index}! Keep up the good work!`}
          />
          <ShareCard
            color={Colors.lightBlueShade}
            title={'The most polluted city'}
            description={`The most polluted city right now is ${this.state.bad.name}. It has over ${this.state.bad.index} as the index of the air pollution !`}        />
          <ShareCard
            color={Colors.purpleShade}
            title={'Newly added city by AirControl'}
            description={`Hey, AirControl just added ${this.state.new.name}! Check out it's air quality! Now it is ${this.state.new.index} .`}
          />
        </View>
      )
    }
  }

  public render() {
    return (
      <ImageBackground
        source={Images.footer}
        style={styles.container}>
        {this.renderContent()}
      </ImageBackground>
    );
  }
}


const mapStateToProps = (
  state: Types.RootState,
  ownProps: Props
): StateProps =>{
  return{
    cities: fromStore.selectCities(state),
    loading: fromStore.selectLoadingCities(state)
  }
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction> | any
): DispatchProps =>
  Redux.bindActionCreators(
    {
      loadCities: fromStore.citiesActions.loadCities
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Share)
