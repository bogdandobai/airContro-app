import * as React from "react"
import { Image, View, StyleSheet, Dimensions, Animated } from "react-native"
import { Images } from "../../themes"
import styles from "./AnimatedLandingStyle"
import LoginForm from "../LoginForm"
import RegisterForm from "../RegisterForm"
import AuthButton from "../PrimaryButton"
import NavigationService from "../../navigation/NavigationService"

export interface Props {
  login:(email: string,password:string) => void
}

const { height } = Dimensions.get("window")

class AnimatedLanding extends React.PureComponent<Props> {
  state = {
    login: new Animated.Value(0),
    register: new Animated.Value(0),
    toggle: false,
    pressedLogin: 0,
    pressedRegister: 0,
    loginAnimation: 0,
    registerAnimation: 0,
    loginZIndex:0
  }
  loginFormRef: LoginForm

  constructor(props: Props) {
    super(props)
  }

  onLogin = () => {
    this.setState(this.state.loginAnimation === 1 ? { loginAnimation: 0 } : { loginAnimation: 1 })
    this.setState({ pressedLogin: this.state.pressedLogin + 1 })
    this.setState({ toggle: true })
    this.state.login.setValue(this.state.loginAnimation)
    this.state.register.setValue(0)
    if (this.state.pressedLogin === 0) {
      Animated.timing(this.state.login, {
        toValue: this.state.loginAnimation === 0 ? 1 : 0,
        duration: 750,
        useNativeDriver:true
      }).start(() => {this.setState({loginZIndex:1})})
    } else this.onSubmitLogin()
  }

  onRegister = () => {
    this.setState(
      this.state.registerAnimation === 1 ? { registerAnimation: 0 } : { registerAnimation: 1 },
    )
    this.setState({ pressedRegister: this.state.pressedRegister + 1 })
    this.setState({ toggle: false })
    this.state.register.setValue(this.state.registerAnimation)
    this.state.login.setValue(0)
    if (this.state.pressedRegister === 0) {
      Animated.timing(this.state.register, {
        toValue: this.state.registerAnimation === 0 ? 1 : 0,
        duration: 750,
      }).start()
    } else return NavigationService.navigate("Home")
  }

  goToRegister = () => {
    this.setState(this.state.loginAnimation === 1 ? { loginAnimation: 0 } : { loginAnimation: 1 })
    this.setState({ pressedLogin: this.state.pressedLogin + 1 })
    this.setState({ toggle: true })
    this.state.login.setValue(this.state.loginAnimation)
    this.state.register.setValue(0)
    Animated.timing(this.state.login, {
      toValue: this.state.loginAnimation === 0 ? 1 : 0,
      duration: 500,
    }).start(() => {
      this.setState({ toggle: false })
      this.state.register.setValue(this.state.registerAnimation)
      this.state.login.setValue(0)
      Animated.timing(this.state.register, {
        toValue: this.state.registerAnimation === 0 ? 1 : 0,
        duration: 500,
      }).start(() => {
        this.setState(
          this.state.registerAnimation === 1 ? { registerAnimation: 0 } : { registerAnimation: 1 },
        )
      })
    })
  }

  goToLogin = () => {
    this.setState(this.state.registerAnimation === 1 ? { registerAnimation: 0 } : { registerAnimation: 1 },)
    this.setState({ toggle: false })
    this.state.register.setValue(this.state.registerAnimation)
    this.state.login.setValue(0)
    Animated.timing(this.state.register, {
      toValue: this.state.registerAnimation === 0 ? 1 : 0,
      duration: 500,
    }).start(() => {
      this.setState({ pressedLogin: this.state.pressedLogin + 1 })
      this.setState({ toggle: true })
      this.state.login.setValue(this.state.loginAnimation)
      this.state.register.setValue(0)
      Animated.timing(this.state.login, {
        toValue: this.state.loginAnimation === 0 ? 1 : 0,
        duration: 500,
      }).start(()=>{
        this.setState(this.state.loginAnimation === 1 ? { loginAnimation: 0 } : { loginAnimation: 1 })
        this.setState({loginZIndex:1})
      })
    })
  }
  
  onSubmitLogin = () =>{
    const credentials = this.loginFormRef.credentials;
    this.props.login(credentials.email, credentials.password)
  }

  public render() {
    const loginButtonY = this.state.register.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: "clamp",
    })

    const registerButtonY = this.state.login.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: "clamp",
    })

    const loginButtonOpacity = this.state.register.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: "clamp",
    })

    const registerButtonOpaciy = this.state.login.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: "clamp",
    })

    // const loginFormZindex = this.state.login.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 1],
    //   extrapolate: "clamp",
    // })

    // const registerFormZindex = this.state.register.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 1],
    //   extrapolate: "clamp",
    // })

    const loginFormY = this.state.login.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: "clamp",
    })

    const registerFormY = this.state.register.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: "clamp",
    })

    const loginFormOpacity = this.state.login.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    })

    const registerFormOpacity = this.state.register.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    })

    const backgroundY = this.state.toggle
      ? this.state.login.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -height / 3],
          extrapolate: "clamp",
        })
      : this.state.register.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -height / 3],
          extrapolate: "clamp",
        })

    return (
      <View style={styles.bigContainer}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { transform: [{ translateY: backgroundY }], backgroundColor: "FAFAFA" },
          ]}
        >
          <Image style={styles.image} resizeMode={"contain"} source={Images.newBackground} />
        </Animated.View>
        <View style={styles.buttons}>
          <Animated.View
            style={{
              zIndex: 2,
              opacity: loginButtonOpacity,
              transform: [{ translateY: loginButtonY }],
            }}
          >
            <AuthButton onPress={this.onLogin} title={"LOG IN"} />
          </Animated.View>

          <Animated.View
            style={{
              zIndex: 2,
              opacity: registerButtonOpaciy,
              transform: [{ translateY: registerButtonY }],
            }}
          >
            <AuthButton onPress={this.onRegister} title={"REGISTER"} />
          </Animated.View>

          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                bottom: 150,
                height: height / 3,
                top: null,
                justifyContent: "center",
                zIndex: this.state.loginZIndex,
                opacity: loginFormOpacity,
                transform: [{ translateY: loginFormY }],
              },
            ]}
          >
            <LoginForm 
            ref={ref => this.loginFormRef = ref}
            onPress={this.goToRegister} 
            />
          </Animated.View>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                bottom: 250,
                height: height / 3,
                top: null,
                justifyContent: "center",
                // zIndex: registerFormZindex,
                opacity: registerFormOpacity,
                transform: [{ translateY: registerFormY }],
              },
            ]}
          >
            <RegisterForm onPress={this.goToLogin} />
          </Animated.View>
        </View>
      </View>
    )
  }
}
export default AnimatedLanding
