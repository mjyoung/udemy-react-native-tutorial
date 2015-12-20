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
      <View style={[styles.header, this.border('yellow')]}>
        <View style={this.border('red')}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={this.border('green')}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
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
  },
  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch',
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
