import React from 'react-native';
let {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;

let Weather = React.createClass({
  getInitialState() {
    return {
      pin: {
        longitude: 0,
        latitude: 0
      }
    };
  },
  render() {
    return <MapView
      annotations={[this.state.pin]}
      onRegionChangeComplete={this.onRegionChangeComplete}
      style={styles.map}>
    </MapView>
  },

  onRegionChangeComplete(region) {
    console.log(region);
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    })
  }

});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
