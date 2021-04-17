import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import * as fromStore from '../../store';

import styles from './NotificationsManagerStyle';
import { UserCity } from "../../types/classes/user-city.class"
import NotificationList from "../../components/NotificationList"

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  toggleSubscription: (city: UserCity) => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  cities: UserCity[]
}

type Props = StateProps & DispatchProps & OwnProps;

class NotificationsManager extends React.PureComponent <Props> {
  constructor(props:Props){
  super(props)
  }

  toggleSubscription = (city: UserCity) => {
    this.props.toggleSubscription(city)
  }

  public render() {
    return (
      <View style={styles.container}>
        <NotificationList
          data={this.props.cities}
          toggleSubscription={this.toggleSubscription}
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
    cities: fromStore.selectUserCities(state)
  }
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction> | any
): DispatchProps =>
  Redux.bindActionCreators(
    {
      toggleSubscription:(city: UserCity) => fromStore.userActions.toggleSubscription(city)
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(NotificationsManager)
