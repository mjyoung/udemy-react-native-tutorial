import React from 'react-native';
let {
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

module.exports = React.createClass({
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.props.onPress} >
        <Text style={styles.buttonText} >
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    fontSize: 20
  }
});
