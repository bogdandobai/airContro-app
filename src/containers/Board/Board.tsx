import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import * as fromStore from '../../store';

import styles from './BoardStyle';
import BoardList from "../../components/BoardList"
import { City } from "../../types/classes"
// tslint:disable-next-line:no-duplicate-imports
import { bindActionCreators } from "redux"

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  startPullingCities:()=>void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  cities: City[]
  interval: number
}

type Props = StateProps & DispatchProps & OwnProps;

class Board extends React.PureComponent <Props> {
  constructor(props:Props){
  super(props)
  }

  componentDidMount(){
    this.props.startPullingCities()
  }

  componentWillUnmount() {
    clearInterval(this.props.interval)
  }

  public render() {
    return (
      <View style={styles.container}>
        <BoardList data={this.props.cities}/>
      </View>
    );
  }
}


const mapStateToProps = (
    state: Types.RootState,
    ownProps: Props
): StateProps =>{
  return{
    cities: fromStore.selectCities(state),
    interval: fromStore.selectIntervalId(state)
  }
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction>
): DispatchProps =>
  bindActionCreators(
    {
      startPullingCities: fromStore.citiesActions.startPullingCities
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Board)
