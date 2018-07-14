/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

class Square extends Component{

  render(){
    return(
    <TouchableWithoutFeedback 
    onPress={()=> this.props.onClick(this.props.value)}
    >
      <View>
        <Text>{this.props.value}</Text>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

class Board extends Component{
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
    this.state.squares[0]='YYY';
  }
  
  handleClick(i){
    var current = this.state;
    current.squares[0] = 'XXX';
    this.setState(current);
  }

  renderSquare(i){
    return(
      <Square value={this.state.squares[i]} onClick = {(i)=> this.handleClick(i)}/>
    );
  }


  render(){
    return(
      <View>
        {/* renderSquare(0); */}
        {/* <Square value={this.state.squares[0]}/> */}
        {this.renderSquare(0)}
      </View>
    );
  }
}


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          dfsafdasfads
        </Text>
        <Board/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
