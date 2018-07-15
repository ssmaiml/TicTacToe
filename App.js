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
    onPress={this.props.onClick}
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
      squares: Array(9).fill('Y'),
    };
  }
  
  handleClick(i){
    var current = this.state;
    current.squares[i] = 'X';
    this.setState(current);
  }

  renderSquare(i){
    return(
      <Square 
      value={this.state.squares[i]} 
      onClick = {()=> this.handleClick(i)}
      />
    );
  }


  render(){
    return(
      <View>
        {/* renderSquare(0); */}
        {/* <Square value={this.state.squares[0]}/> */}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
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
          dfsafdasfad
        </Text>
        <Board/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
