import React from 'react-native';
let {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

let Weather = React.createClass({
  render() {
    let pins = [{
      latitude: 37,
      longitude: -95
    }];
    return <MapView
      annotations={pins}
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
