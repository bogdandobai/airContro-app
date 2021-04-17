import * as React from 'react';
import { ImageBackground, Linking, Text, View } from "react-native"
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import * as fromStore from '../../store';
import { Avatar, FAB } from "react-native-paper"
import styles from './ProfileStyle';
import { Colors, Images } from "../../themes"
import NavigationService from "../../navigation/NavigationService"
import ProfileCard from "../../components/ProfileCard"
import { User } from "../../types/classes"
import { verticalScale } from "../../themes/Metrics"
/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  signOut: () => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  user: User
}

type Props = StateProps & DispatchProps & OwnProps;

export interface State{
  open: boolean
}

class Profile extends React.PureComponent <Props,State> {
  constructor(props:Props){
    super(props)
    this.state={
      open: false
    }
  }

  stateChange = ({open}) => this.setState({open})

  contactUs = () => {
    Linking.openURL(`mailto:bogdan.dobai@outlook.com`);
  }

  manageNotifications = () => {
    NavigationService.navigate('ManageNotifications')
  }

  signOut = () => {
    this.props.signOut()
  }

  public render() {
    const {open} = this.state
    return (
      <ImageBackground source={Images.footer} style={styles.container}>
        <View style={{alignItems:'center',marginTop:verticalScale(80)}}>
          <Avatar.Text
            color={Colors.pink}size={verticalScale(120)}
            label={`${this.props.user.first_name.charAt(0)}${this.props.user.last_name.charAt(0)}`}
            style={{backgroundColor:Colors.pinkShade}} />
          <View style={styles.header}>
            <View style={styles.name}>
              <Text style={styles.textInput}>{this.props.user.first_name}  </Text>
              <Text style={styles.textInput}>{this.props.user.last_name}</Text>
            </View>
            <Text style={styles.email}>{this.props.user.email}</Text>
          </View>
        </View>
        <FAB.Group
          visible={true}
          open={open}
          icon={open ? 'close' : 'settings'}
          actions={[
            { icon: 'email', label: 'Contact Us',  onPress: this.contactUs },
            { icon: 'bell', label: 'Manage Notifications', onPress: this.manageNotifications },
            { icon: 'logout', label: 'Sign out', onPress: this.signOut },
          ]}
          onStateChange={this.stateChange}
          fabStyle={{backgroundColor:'white', zIndex:300}}
          onPress={() => {
            this.setState({open: !this.state.open})
          }}
        />
        {!this.state.open && <View style={{ marginTop: verticalScale(50) }}>
          <ProfileCard
            onPress={() => NavigationService.navigate('Chat')}
            source={require('../../images/animations/chat.json')}
            title={"Chat with everyone else !"}
          />
          <ProfileCard
            onPress={() => NavigationService.navigate('Share')}
            source={require('../../images/animations/share.json')}
            title={"Share the latest news !"}
          />

        </View>
        }
      </ImageBackground>
    );
  }
}


const mapStateToProps = (
  state: Types.RootState,
  ownProps: Props
): StateProps =>{
  return{
    user: fromStore.selectUser(state)
  }
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction> | any
): DispatchProps =>
  Redux.bindActionCreators(
    {
      signOut: () => fromStore.authActions.logout()
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
