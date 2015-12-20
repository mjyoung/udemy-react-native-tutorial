// Import some code we need
import React from 'react-native';
let AppRegistry = React.AppRegistry;
let View = React.View;
let Text = React.Text;
let StyleSheet = React.StyleSheet;
import DayItem from './src/DayItem.js';

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

// Create a react component
let Weekdays = React.createClass({
  days() {
    return DAYS.map((day) => {
      return <DayItem day={day} />;
    });
  },

  render() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
      {this.days()}
    </View>
  }
});

// Style the React component
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', () => {
  return Weekdays;
});
