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
    // onClick = buttonId => {
    //     console.log("Clicked" + buttonId);
    // };

    render() {
        return (
            <>
                <div>
                    <h1 className={styles.header}>Tic Tac Toe</h1>
                    <div className={styles.box}>
                        <Tile onClick={onClick} value={"a"} />
                        <Tile onClick={onClick} value={"b"} />
                        <Tile onClick={onClick} value={"c"} />
                        <Tile onClick={onClick} value={"d"} />
                        <Tile onClick={onClick} value={"e"} />
                        <Tile onClick={onClick} value={"f"} />
                        <Tile onClick={onClick} value={"g"} />
                        <Tile onClick={onClick} value={"h"} />
                        <Tile onClick={onClick} value={"i"} />
                        {/* <div>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 0");
                                }}>
                                {this.state.board[0][0]}
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 1");
                                }}>
                                {this.state.board[0][1]}
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 2");
                                }}>
                                {this.state.board[0][2]}
                            </button>
                        </div>
                        <div>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 3");
                                }}>
                                {this.state.board[1][0]}
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 4");
                                }}>
                                {this.state.board[1][1]}
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 5");
                                }}>
                                {this.state.board[1][2]}
                            </button>
                        </div>
                        <div>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 6");
                                }}>
                                {this.state.board[2][0]}
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 7");
                                }}>
                                {this.state.board[2][1]}
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    this.onClick("button 8");
                                }}>
                                {this.state.board[2][2]}
                            </button>
                        </div> */}
                    </div>
                </div>
            </>
        );
    }
}
