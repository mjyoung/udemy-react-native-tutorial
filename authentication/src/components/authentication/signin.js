import React from 'react-native';
let {
  View,
  Text,
  StyleSheet,
  TextInput
} = React;

import Button from '../common/button.js';

module.exports = React.createClass({

  getInitialState() {
    return {
      username: '',
      password: ''
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          // onChangeText={(text) => this.setState({username: text})}
          onChangeText={this.setUsername}
          />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={this.setPassword}
          />
        <Button
          text={'Sign In'}
          onPress={this.onPress} />
        <Text>{this.state.username} - {this.state.password}</Text>
      </View>
    );
  },

  setUsername(inputValue) {
    this.setState({ username: inputValue });
  },

  setPassword(inputValue) {
    this.setState({ password: inputValue });
  },

  onPress() {
    // log the user in
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200
  },
  label: {
    fontSize: 18
  }
});
