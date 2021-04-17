import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import Map from '../../components/Map';
import * as fromStore from '../../store'
import styles from './LocationStyle';
import { City } from "../../types/classes"

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  changeSearch: (search: string) => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  cities: City[]
}

type Props = StateProps & DispatchProps & OwnProps;

class Location extends React.PureComponent <Props> {
  constructor(props:Props){
  super(props)
  }
  
  public render() {
    return (
      <View style={styles.container}>
        <Map
          changeSearch={this.props.changeSearch}
          cities={this.props.cities}
        />
      </View>
    );
  }
}


const mapStateToProps = (
    state: Types.RootState,
    ownProps: Props
): StateProps =>{
  return{
    cities: fromStore.selectCities(state)
  }
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction>
): DispatchProps =>
  Redux.bindActionCreators(
    {
      changeSearch:(search: string) => fromStore.citiesActions.changeSearch(search)
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Location)
