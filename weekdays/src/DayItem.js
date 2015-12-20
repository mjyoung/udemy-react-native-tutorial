// Import some code we need
import React from 'react-native';
let Text = React.Text;

// Create our component
let DayItem = React.createClass({
  render() {
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },

  style() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },

  color() {
    var opacity = 1 / (this.props.daysUntil + 1);
    return 'rgba(0, 0, 0, ' + opacity + ')';
  },

  fontWeight() {
    var weight = (8 - this.props.daysUntil) * 100;
    return weight.toString();
  },

  fontSize() {
    return 60 - 6 * this.props.daysUntil;
  },

  lineHeight() {
    return 70 - 4 * this.props.daysUntil;
  }

});

// Make this code available elsewhere
module.exports = DayItem;
