import React from 'react-native';
let {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = React;
import FormatMSM from 'minutes-seconds-milliseconds';

let StopWatch = React.createClass({
  getInitialState() {
    return {
      timeElapsed: null
    }
  },

  render() {
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border('red')]}>
          <Text>
            {FormatMSM(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
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
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress} >
      <Text>
        Start
      </Text>
    </TouchableHighlight>
  },

  lapButton() {
    return <TouchableHighlight underlayColor="gray">
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },

  handleStartPress() {
    let startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  },

  handleLapPress() {

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
    alignItems: 'stretch'
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timerWrapper: { // Red
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: { // Green
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
});
