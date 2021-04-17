import * as React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import * as fromStore from '../../store'
import AnimatedLanding from '../../components/AnimatedLanding';

import styles from './LandingStyle';

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  login:(email:string,password:string)=> void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {}

type Props = StateProps & DispatchProps & OwnProps;

class Landing extends React.PureComponent <Props> {
  constructor(props:Props){
  super(props)
  }

  public render() {
    return (
      <View style={styles.container}>
            <AnimatedLanding 
            login={this.props.login}
            // login={()=>NavigationService.navigate('Home')}
            />
      </View>

    );
  }
}


const mapStateToProps = (
    state: Types.RootState,
    ownProps: Props
): StateProps =>{
  return{}
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction>
): DispatchProps =>
  Redux.bindActionCreators({ 
    login: (email: string, password: string) => fromStore.authActions.login(email, password),
  },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Landing)
