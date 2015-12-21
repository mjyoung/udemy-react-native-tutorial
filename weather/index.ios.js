import React from 'react-native';

let {
  AppRegistry,
  MapView,
  View,
  Text,
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
    return <View
      style={styles.container}>
      <MapView
        annotations={[this.state.pin]}
        onRegionChangeComplete={this.onRegionChangeComplete}
        style={styles.map}>
      </MapView>
      <View
        style={styles.textWrapper}>
        <Text style={styles.text}>
          {this.state.city}
        </Text>
        <Text style={styles.text}>
          {this.state.temperature}
        </Text>
        <Text style={styles.text}>
          {this.state.description}
        </Text>
      </View>
    </View>
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
        this.setState({
          city: data.city,
          temperature: data.temperature,
          description: data.description
        });
      });
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#f5fcff'
  },
  map: {
    flex: 2,
    marginTop: 30
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', () => Weather);
