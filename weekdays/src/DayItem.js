// Import some code we need
import React from 'react-native';
let Text = React.Text;
let StyleSheet = React.StyleSheet;

// Create our component
let DayItem = React.createClass({
  render() {
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }
});

// Style our component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000ff'
  }
});

// Make this code available elsewhere
module.exports = DayItem;
