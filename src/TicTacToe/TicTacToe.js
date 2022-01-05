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
                        <Tile onClick={"a"} value={this.state.board[0][0]} />
                        <Tile onClick={"b"} value={this.state.board[0][1]} />
                        <Tile onClick={"c"} value={this.state.board[0][2]} />
                        <Tile onClick={"d"} value={this.state.board[1][0]} />
                        <Tile onClick={"e"} value={this.state.board[1][1]} />
                        <Tile onClick={"f"} value={this.state.board[1][2]} />
                        <Tile onClick={"g"} value={this.state.board[2][0]} />
                        <Tile onClick={"h"} value={this.state.board[2][1]} />
                        <Tile onClick={"i"} value={this.state.board[2][2]} />
                    </div>
                </div>
            </>
        );
    }
}
