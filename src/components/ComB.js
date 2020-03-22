import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ComJ} from './ComJ';

export default class ComB extends Component {
  render() {
    return (
      <View style={{width:200, height:200, backgroundColor:'red', justifyContent: 'center', alignItems: 'center'}}>
        <ComJ></ComJ>
      </View>
    );
  }
}