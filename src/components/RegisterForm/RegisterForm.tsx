import * as React from 'react';
import { View } from 'react-native';
import styles from './RegisterFormStyle';
import AnimatedInput from '../AnimatedInput';
import AuthTitle from '../AuthTitle'
export interface Props {
  onPress: () => void;
}

export interface State {
  email: string
  password: string
  firstName: string
  lastName: string
  confirmPassword: string
}


class RegisterForm extends React.PureComponent<Props, State> {
  private firstNameRef: AnimatedInput
  private lastNameRef: AnimatedInput
  private emailRef: AnimatedInput
  private passwordRef: AnimatedInput
  private confirmPasswordRef: AnimatedInput

  constructor(props:Props){
    super(props);
    this.state = {
      email: "", 
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: ""
    }
  }
  
  onChangeEmail = (email: string) => {
    this.setState({ email });
  }
  
  onChangePassword = (password: string) => {
    this.setState({ password });
  }

  onChangeFirstName = (firstName: string) => {
    this.setState({firstName})
  }

  onChangeLastName = (lastName: string) => {
    this.setState({lastName})
  }

  onChangeConfirmPassword = (confirmPassword: string) => {
    this.setState({confirmPassword})
  }

  onPress = () => {
    this.props.onPress();
  }

  public render() {
    return (
      <View style={styles.container}>
        <AuthTitle
          title="Sign Up"
          question="Already have an account?"
          button="Sign in"
          onPress = {this.onPress}
        />
          <AnimatedInput
          ref={ref => (this.firstNameRef = ref)}
          value={this.state.firstName}
          label="First Name"
          onChangeText={this.onChangeFirstName}
          next={this.lastNameRef}
          />
          <AnimatedInput
          ref={ref => (this.lastNameRef = ref)}
          value={this.state.lastName}
          label="Last Name"
          onChangeText={this.onChangeLastName}
          next={this.emailRef}
          />
        <AnimatedInput
          ref={ref => (this.emailRef = ref)}
          value={this.state.email}
          label="Email"
          onChangeText={this.onChangeEmail}
          next={this.passwordRef}
        />
        <AnimatedInput
          ref={ref => (this.passwordRef = ref)}
          value={this.state.password}
          label="Password"
          onChangeText={this.onChangePassword}
          next={this.confirmPasswordRef}
          secureTextEntry={true}
        />
        <AnimatedInput
          ref={ref => (this.confirmPasswordRef = ref)}
          value={this.state.confirmPassword}
          label="Confirm password"
          onChangeText={this.onChangeConfirmPassword}
          next={this.firstNameRef}
          secureTextEntry={true}
          />
      </View>
    );
  }
}
export default RegisterForm;
