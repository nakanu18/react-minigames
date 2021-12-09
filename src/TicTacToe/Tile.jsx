import React, { Component } from "react";

import styles from "./styles.module.css";

export default class Tile extends Component {
    onClick = buttonId => {
        console.log("Clicked" + buttonId);
    };

    render() {
        return (
            <>
                <div>
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
                </div>
            </>
        );
    }
}
