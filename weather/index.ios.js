import React from 'react-native';
let {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

let Weather = React.createClass({
  render() {
    return <MapView style={styles.map}>
    </MapView>
  }

});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
