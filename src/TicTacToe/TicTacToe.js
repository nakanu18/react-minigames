import React, { Component } from "react";

import styles from "./styles.module.css";

export default class TicTacToe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [
                ["-", "-", "-"],
                ["-", "-", "-"],
                ["-", "-", "-"],
            ],
        };
    }
    onPress = buttonId => {
        console.log("Clicked ${buttonId}");
    };

    render() {
        return (
            <>
                <div>
                    <h1 className={styles.header}>Tic Tac Toe</h1>
                    <div className={styles.box}>
                        <div>
                            <button className={styles.button} onPress={()=>{this.onPress("button 0");}}>{this.state.board[0][0]}</button>
                            <button className={styles.button} onPress={()=>{this.onPress("button 1");}}>{this.state.board[0][1]}</button>
                            <button className={styles.button} onPress={()=>{this.onPress("button 2");}}>{this.state.board[0][2]}</button>
                        </div>
                        <div>
                            <button className={styles.button} onPress={()=>{this.onPress("button 3");}}>{this.state.board[0][3]}</button>
                            <button className={styles.button} onPress={()=>{this.onPress("button 4");}}>{this.state.board[0][4]}</button>
                            <button className={styles.button} onPress={()=>{this.onPress("button 5");}}>{this.state.board[0][5]}</button>
                        </div>
                        <div>
                            <button className={styles.button} onPress={()=>{this.onPress("button 6");}}>{this.state.board[0][6]}</button>
                            <button className={styles.button} onPress={()=>{this.onPress("button 7");}}>{this.state.board[0][7]}</button>
                            <button className={styles.button} onPress={()=>{this.onPress("button 8");}}>{this.state.board[0][8]}</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
