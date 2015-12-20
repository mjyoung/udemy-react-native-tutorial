// Import some code we need
import React from 'react-native';
let AppRegistry = React.AppRegistry;
let View = React.View;
let Text = React.Text;
let StyleSheet = React.StyleSheet;

// Create a react component
let Weekdays = React.createClass({
  render() {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
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
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays;
});
