import * as React from 'react';
import { View } from 'react-native';
import styles from './LoginFormStyle';
import AuthTitle from '../AuthTitle';
import AnimatedInput from '../AnimatedInput';

export interface Props {
  onPress: () => void;
}

export interface State {
  email: string
  password: string
}


class LoginForm extends React.PureComponent<Props, State> {
  private passwordRef: AnimatedInput

  constructor(props:Props){
    super(props);
    this.state = {
      email: "" , 
      password: ""
    }
  }
  
  onChangeEmail = (email: string) => {
    this.setState({ email });
  }
  
  onChangePassword = (password: string) => {
    this.setState({ password });
  }

  onPress = () => {
    this.props.onPress();
   }

   get credentials(){
     return {email:this.state.email,password:this.state.password}
   }

  public render() {
    return (
      <View style={styles.container}>
        <AuthTitle
          title="Sign In"
          question="Don't have an account yet?"
          button="Sign Up"
          onPress={this.onPress}
        />
        <AnimatedInput
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
          secureTextEntry={true}
        />
        </View>

    );
  }
}
export default LoginForm;
