import React from 'react-native';
let {
  View,
  Text,
  StyleSheet
} = React;

var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Signin />
      </View>
    )
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
