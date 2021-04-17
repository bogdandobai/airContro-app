import React from 'react';
import { TouchableOpacity, View } from "react-native"
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import * as fromStore from '../../store'
import styles from './CityDetailsStyle';
import { City, Measure } from "../../types/classes"
import { NavigationContainerProps, SafeAreaView } from "react-navigation"
import { TabView } from "react-native-tab-view"
import { Metrics } from "../../themes"
import Graph from "../../components/Graph"
import Animated from 'react-native-reanimated';

/**
 * The properties passed to the component
 */
export interface OwnProps extends NavigationContainerProps{}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  startPulling:(city: City, period: string) => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  city: City
  measures: Measure[]
  interval: number
}

export interface State{
  index: number
}

type Props = StateProps & DispatchProps & OwnProps;

const routes = [{ key: 'day', title:'day', backgroundColor:'white' }, { key: 'week',title:'week' }, {key: 'month',title:'month'}];

class CityDetails extends React.PureComponent <Props, State> {
  constructor(props:Props){
    super(props)
    props.navigation.setParams({title: props.city.name})
    this.state={index:0}
  }

  componentDidMount(){
    // this.props.startPulling(this.props.city,'month')
  }

  componentWillUnmount() {
    clearInterval(this.props.interval)
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'day':
        return <Graph measures={this.props.measures}/>;
      case 'week':
        return <Graph measures={this.props.measures}/>;
      case 'month':
        return <Graph measures={this.props.measures}/>;
      default:
        return null;
    }
  };

  renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 169 : 211
                ),
              })
            ),
            Animated.round(
            Animated.interpolate(props.position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? 116 : 211
              ),
            })
          ),
          Animated.round(
            Animated.interpolate(props.position, {
              inputRange,
              outputRange: inputRange.map(inputIndex =>
                inputIndex === i ? 251 : 211
              ),
            })
          ),
          );
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.changeIndex(i)}>
              <Animated.Text style={[styles.title,{ color }]}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  changeIndex = (index) => {
    clearInterval(this.props.interval)
    this.setState({index})
    const period = index === 0 ? 'day' : index === 1 ? 'week' : 'month'
    this.props.startPulling(this.props.city,period)

  }

  public render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TabView
            navigationState={{
              index: this.state.index,
              routes,
            }}
            onIndexChange={this.changeIndex}
            renderScene={this.renderScene}
            renderTabBar={this.renderTabBar}
            tabBarPosition={"top"}
            swipeEnabled={true}
            initialLayout={{
              width: Metrics.width,
              height: Metrics.height,
            }}
            lazy={true}
          />
        </View>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (
  state: Types.RootState,
  ownProps: Props
): StateProps =>{
  return{
    city: fromStore.selectedCity(state),
    measures: fromStore.selectMeasures(state),
    interval: fromStore.selectIntervalId(state)
  }
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction>
): DispatchProps =>
  Redux.bindActionCreators({
      startPulling:(city: City, period: string) => fromStore.citiesActions.startPulling(city,period)
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(CityDetails)
