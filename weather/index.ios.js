import React from 'react-native';
let {
  AppRegistry,
  MapView,
  View,
  StyleSheet
} = React;
import Api from './src/api';

let Weather = React.createClass({
  getInitialState() {
    return {
      pin: {
        longitude: 0,
        latitude: 0
      },
      city: '',
      temperature: '',
      description: ''
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
    this.setState({
      pin: {
        longitude: region.longitude,
        latitude: region.latitude
      }
    })

    Api(region.latitude, region.longitude)
    .then((data) => {
        console.log(data);
        this.setState({
          city: data.city,
          temperature: data.temperature,
          description: data.description
        });
      });
  }

});

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});

AppRegistry.registerComponent('weather', () => Weather);
