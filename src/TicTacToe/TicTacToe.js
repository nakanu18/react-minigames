import React, { Component } from "react";

import styles from "./styles.module.css";
import Tile from "./TicTacToe/Tile";

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                ["a", "b", "c"],
                ["d", "e", "f"],
                ["g", "h", "i"],
            ],
        };
    }
    onClick = buttonId => {
        console.log("Clicked" + buttonId);
    };

    render() {
        return (
            <>
                <div>
                    <h1 className={styles.header}>Tic Tac Toe</h1>
                    <div className={styles.box}>
                        <Tile onClick={() => {
                            this.onClick("button 0");
                        }}
                            value={this.state.board[0][0]} />
                        <Tile onClick={() => {
                            this.onClick("button 1");
                        }}
                            value={this.state.board[0][1]} />
                        <Tile onClick={() => {
                            this.onClick("button 2");
                        }}
                            value={this.state.board[0][2]} />
                        <Tile onClick={() => {
                            this.onClick("button 3");
                        }}
                            value={this.state.board[1][0]} />
                        <Tile onClick={() => {
                            this.onClick("button 4");
                        }}
                            value={this.state.board[1][1]} />
                        <Tile onClick={() => {
                            this.onClick("button 5");
                        }}
                            value={this.state.board[1][2]} />
                        <Tile onClick={() => {
                            this.onClick("button 6");
                        }} value={this.state.board[2][0]} />
                        <Tile onClick={() => {
                            this.onClick("button 7");
                        }} value={this.state.board[2][1]} />
                        <Tile onClick={() => {
                            this.onClick("button 8");
                        }} value={this.state.board[2][2]} />
                    </div>
                </div>
            </>
        );
    }
}
