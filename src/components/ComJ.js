import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {upNumber} from '../actions/number';
import {connect} from 'react-redux';

class ComJ extends Component {

  render() {
    return (
      <View style={{width:100, height:100, backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'red', fontSize: 30}}>{this.props.number}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.numberReducer.number,
  };
};

export default connect(mapStateToProps, null)(ComJ)