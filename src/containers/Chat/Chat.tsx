import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import * as Types from '../../store/state';
import * as fromStore from '../../store';
import { Bubble, GiftedChat, IMessage } from "react-native-gifted-chat"
import { User } from "../../types/classes"
import { verticalScale } from "../../themes/Metrics"
import { Colors, Images } from "../../themes"
import { TouchableOpacity, Image } from "react-native"

/**
 * The properties passed to the component
 */
export interface OwnProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {
  loadMessages:() => void
  addMessage:(message: string) => void
  onChat: () => void
  offChat: () => void
}

/**
 * The properties mapped from the global state
 */
export interface StateProps {
  messages: IMessage[]
  loading: boolean
  user: User
}

export interface State {
  messages: IMessage[]
}

type Props = StateProps & DispatchProps & OwnProps;

class Chat extends React.PureComponent <Props, State> {
  constructor(props:Props){
    super(props)
    this.state={messages:[]}
  }

  componentDidMount() {
    this.props.loadMessages()
    this.props.onChat()
  }

  componentWillUnmount(){
    this.props.offChat()
  }

  onSend = (message) => {
    this.props.addMessage(message[0].text)
  }

  renderBubble(props) {
    return <Bubble
      wrapperStyle={{
        right:{
          marginBottom:10,
          backgroundColor: Colors.pinkShade
        },
        left:{
          marginBottom: 10
        }
      }}
      {...props}
    />;
  }

  renderSend() {
    return(
      <TouchableOpacity>
        <Image source={Images.backButton}/>
      </TouchableOpacity>
    )
  }


  public render() {
    return (
      <GiftedChat
        // renderSend={this.renderSend}
        scrollToBottom={true}
        showAvatarForEveryMessage={false}
        renderAvatarOnTop={true}
        renderBubble={this.renderBubble}
        textInputProps={{autoCorrect: false}}
        isTyping={true}
        messagesContainerStyle={{marginTop: verticalScale(33), paddingBottom: verticalScale(33)}}
        messages={this.props.messages}
        renderUsernameOnMessage={true}
        onSend={this.onSend}
        showUserAvatar={true}
        alwaysShowSend={true}
        inverted={false}
        user={{
          _id: this.props.user.id,
          name: this.props.user.first_name + this.props.user.last_name,
        }}
      />
    );
  }
}


const mapStateToProps = (
  state: Types.RootState,
  ownProps: Props
): StateProps =>{
  return{
    loading: fromStore.selectLoadingMessages(state),
    messages: fromStore.selectMessages(state),
    user: fromStore.selectUser(state)
  }
}

const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Types.RootAction> | any
): DispatchProps =>
  Redux.bindActionCreators(
    {
      loadMessages: fromStore.messagesActions.loadMessages,
      addMessage:(message: string) => fromStore.messagesActions.addMessage(message),
      onChat: fromStore.messagesActions.onChat,
      offChat: fromStore.messagesActions.offChat
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(Chat)
