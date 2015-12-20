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
      <View style={styles.header}>
        <View style={styles.timerWrapper}>
          <Text style={styles.timer}>
            {FormatMSM(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
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
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, styles.startButton]} >
      <Text>
        Start
      </Text>
    </TouchableHighlight>
  },

  lapButton() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleLapPress}
      style={styles.button} >
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
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00cc00'
  },
  lapButton: {

  }
});

AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
});
