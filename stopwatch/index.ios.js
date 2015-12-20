import React from 'react-native';
let {
  Text,
  View,
  AppRegistry
  } = React;

let StopWatch = React.createClass({
  render() {
    return <Text>
      Hi.
    </Text>
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
});
