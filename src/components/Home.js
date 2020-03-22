import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {ComA} from './ComA';
// import {upNumber, downNumber} from '../actions/number';
// import {connect} from 'react-redux';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
        {/* <TouchableOpacity onPress={() => this.props.onUpNumber(this.props.number)}>
          <Text>Click +</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onDownNumber(this.props.number)}>
          <Text>Click -</Text>
        </TouchableOpacity> */}
        {/* <ComA></ComA> */}
      </View>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     number: state.numberReducer.number,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpNumber: (number) => dispatch(upNumber(number)),
//     onDownNumber: (number) => dispatch(downNumber(number))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)