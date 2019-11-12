import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

import auth from '@react-native-firebase/auth';

export default class PhoneAuthTest extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      message: '',
      codeInput: '',
      phoneNumber: '+55',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {        
        this.props.navigation.navigate('MenuPrincipal', {fone : user.phoneNumber})
      } else {
        // User has been signed out, reset the state
        this.ready = true
        this.setState({
          ready: true,
          message: '',
          codeInput: '',
          phoneNumber: '+55',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Enviando código ...' });

    auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
      .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error => this.setState({ message: `Código errado: ${error.message}` }));
    }
  };

  signOut = () => {
    auth().signOut();
  }

  renderPhoneNumberInput() {
   const { phoneNumber } = this.state;

    return (
      <View style={{ padding: 25 }}>
        <Text>Enter phone number:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'Phone number ... '}
          value={phoneNumber}
        />
        <Button title="Sign In" color="0026ca" onPress={this.signIn} />
      </View>
    );
  }

  renderMessage() {
    const { message } = this.state;

    if (!message.length) return null;

    return (
      <Text style={{ padding: 5, backgroundColor: '#000', color: '#fff' }}>{message}</Text>
    );
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;

    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Enter verification code below:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Code ... '}
          value={codeInput}
        />
        <Button title="Confirm Code" color="#0026ca" onPress={this.confirmCode} />
      </View>
    );
  }

  render() {
    const { confirmResult } = this.state;

    return (
      <View style={{ flex: 1 }}>

        {this.state.ready && !confirmResult && this.renderPhoneNumberInput()}

        {this.state.ready && this.renderMessage()}

        {this.state.ready && confirmResult && this.renderVerificationCodeInput()}

      </View>
    );
  }
}