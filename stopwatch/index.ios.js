import React from 'react-native';
let {
  Text,
  View,
  AppRegistry
} = React;

let StopWatch = React.createClass({
  render() {
    return <View>
      <Text>
        00:00.00
      </Text>
      {this.startStopButton()}
      {this.lapButton()}
    </View>
  },
  startStopButton() {
    return <View>
      <Text>
        Start
      </Text>
    </View>
  },
  lapButton() {
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
});
