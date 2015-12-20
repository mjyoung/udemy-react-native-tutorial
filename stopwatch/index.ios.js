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
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
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
        {this.laps()}
      </View>

    </View>
  },

  laps() {
    return this.state.laps.map((lap, index) => {
      return <View>
        <Text>
          Lap #{index+1}
        </Text>
        <Text>
          {FormatMSM(lap)}
        </Text>
      </View>
    });
  },

  startStopButton() {
    let buttonStyle = this.state.running ? styles.stopButton : styles.startButton;
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}
      style={[styles.button, buttonStyle]} >
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
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
    this.setState({
      running: !this.state.running,
      startTime: new Date()
    });
    if (!this.state.running) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.setState({
          timeElapsed: new Date() - this.state.startTime
        });
      }, 30);
    }
  },

  handleLapPress() {
    let lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat(lap)
    });
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
    borderColor: 'green'
  },
  stopButton: {
    borderColor: 'red'
  },
  lapButton: {

  }
});

AppRegistry.registerComponent('stopwatch', () => {
  return StopWatch;
});
