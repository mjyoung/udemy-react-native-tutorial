// Import some code we need
import React from 'react-native';
import Moment from 'moment';
let AppRegistry = React.AppRegistry;
let View = React.View;
let Text = React.Text;
let StyleSheet = React.StyleSheet;
import DayItem from './src/DayItem.js';

// Create a react component
let Weekdays = React.createClass({
  days() {
    var daysItems = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      );
    }
    return daysItems;
  },

  render() {
    return <View style={styles.container}>
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
