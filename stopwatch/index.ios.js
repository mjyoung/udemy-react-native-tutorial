import React from 'react-native';
let {
  Text,
  View,
  AppRegistry,
  StyleSheet
} = React;

let StopWatch = React.createClass({
  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text>
            00:00.00
          </Text>
        </View>
        <View>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={styles.footer}>
        <Text>
          I am a list of laps
        </Text>
      </View>

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

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 1,
  },
  footer: { // Blue
    flex: 1,
  }
});

AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
});
