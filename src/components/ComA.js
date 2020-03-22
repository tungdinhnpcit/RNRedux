import React, {Component} from 'react';
import {View} from 'react-native';
import {ComB} from './ComB';

export default class ComA extends Component {
  render() {
    return (
      <View style={{width:300, height:300, backgroundColor:'blue', justifyContent: 'center', alignItems: 'center'}}>
        <ComB></ComB>
      </View>
    );
  }
}
