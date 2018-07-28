/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

var color_black = '#000000';
var color_white = '#ffffff';

function Square(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View>
                <Text style={styles.square}>{props.value}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

function HistoryButton(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onClick}>
            <View style={styles.historyButtonBackground}>
                <View style={styles.row}>
                    <Text style={styles.historyButton}>{props.value}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

class Board extends Component {

    renderSquare(i) {
        return (<Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>);
    }

    render() {
        return (
            <View style={styles.board}>
                <View style={styles.row}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </View>
                <View style={styles.row}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </View>
                <View style={styles.row}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </View>
            </View>
        );
    }
}

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick(i) {
        const history = this
            .state
            .history
            .slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current
            .squares
            .slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext
            ? 'X'
            : 'O';
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move
                ? 'Go to move #' + move
                : 'Go to game start';
            return (
                <View key={move}>
                    <HistoryButton value={desc} onClick={() => this.jumpTo(move)}/>
                </View>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext
                ? 'X'
                : 'O');
        }

        return (
            <View>
                <Board
                    squares={current.squares}
                    xIsNext={this.state.xIsNext}
                    onClick={(i) => this.handleClick(i)}/>
                <Text>
                    {status}
                </Text>
                <View>
                    {moves}
                </View>
            </View>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [
            0, 1, 2
        ],
        [
            3, 4, 5
        ],
        [
            6, 7, 8
        ],
        [
            0, 3, 6
        ],
        [
            1, 4, 7
        ],
        [
            2, 5, 8
        ],
        [
            0, 4, 8
        ],
        [2, 4, 6]
    ];
    for (var i = 0; i < lines.length; i++) {
        const [a,
            b,
            c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: color_white,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 50,
        height: 50
    },
    board: {
        backgroundColor: color_black,
        width: 156,
        height: 156,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    historyButtonBackground: {
        backgroundColor: color_black,
        width: 124,
        height: 54,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    historyButton: {
        backgroundColor: color_white,
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 120,
        height: 50
    }
});
