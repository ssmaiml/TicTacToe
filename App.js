/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

var color_black = '#000000';
var color_white = '#ffffff';

class Square extends Component {

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onClick}>
                <View>
                    <Text style={styles.square}>{this.props.value}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill('Y')
        };
    }

    handleClick(i) {
        var current = this.state;
        current.squares[i] = 'X';
        this.setState(current);
    }

    renderSquare(i) {
        return (<Square value={this.state.squares[i]} onClick= {()=> this.handleClick(i)}/>);
    }

    render() {
        return (
            <View style = {styles.board}>
              <View style = {styles.row}>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </View>
              <View style = {styles.row}>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </View>
              <View style = {styles.row}>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </View>
            </View>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Board/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    square: {
      backgroundColor: color_white,
      textAlign: 'center',
      textAlignVertical: 'center',
      width: 50,
      height: 50
    },
    board:{
      backgroundColor: color_black,
      width:156,
      height:156,
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
});
