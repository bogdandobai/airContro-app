import * as React from "react"
import { ActivityIndicator, View } from "react-native"
import { connect } from "react-redux"
import * as Redux from "redux"
import * as Types from "../../store/state"
import styles from "./DocumentStyle"
import WebView from "react-native-webview"
import { NavigationContainerProps } from "react-navigation"
import { Colors } from "../../themes"

/**
 * The properties passed to the component
 */
export interface OwnProps extends NavigationContainerProps {}

/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {}

/**
 * The properties mapped from the global state
 */
export interface StateProps {}

export interface State {
  loading: boolean
}

type Props = StateProps & DispatchProps & OwnProps

class Document extends React.PureComponent<Props, State> {
  url: string
  constructor(props: Props) {
    super(props)
    this.url = this.props.navigation.getParam("url")
    this.state = { loading: true }
  }

  onLoad = () => {
    this.setState({ loading: false })
  }

  renderLoader = () => {
    if (!this.state.loading) {
      return null
    }
    return <ActivityIndicator style={{ flex: 1 }} size={"large"} color={Colors.purple} />
  }

  public render() {
    return (
      <View style={styles.container}>
        {this.renderLoader()}
        <WebView onLoadEnd={this.onLoad} source={{ uri: this.url }} />
      </View>
    )
  }
}

const mapStateToProps = (state: Types.RootState, ownProps: Props): StateProps => {
  return {}
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<Types.RootAction>): DispatchProps =>
  Redux.bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Document)
