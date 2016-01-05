import React from 'react-native';
let {
  View,
  Text,
  StyleSheet
} = React;

module.exports = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>I am on both iOS and Android</Text>
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
