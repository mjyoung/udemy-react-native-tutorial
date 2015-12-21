import React from 'react-native';
let {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

let Weather = React.createClass({
  render() {
    return <MapView
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map}>
    </MapView>
  },

  onRegionChangeComplete(region) {
    console.log(region);
  }

});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
