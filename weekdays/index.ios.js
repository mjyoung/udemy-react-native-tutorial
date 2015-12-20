// Import some code we need
import React from 'react-native';
let AppRegistry = React.AppRegistry;
let View = React.View;
let Text = React.Text;

// Create a react component
let Weekdays = React.createClass({
  render() {
    return <View>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays;
});
