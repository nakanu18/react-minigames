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

    render() {
        return (
            <>
                <div>
                    <div className={styles.box}>
                        <div>
                            <button className={styles.button}>Click Me</button>
                            <button className={styles.button}>Click Me</button>
                            <button className={styles.button}>Click Me</button>
                        </div>
                        <div>
                            <button className={styles.button}>Click Me</button>
                            <button className={styles.button}>Click Me</button>
                            <button className={styles.button}>Click Me</button>
                        </div>
                        <div>
                            <button className={styles.button}>Click Me</button>
                            <button className={styles.button}>Click Me</button>
                            <button className={styles.button}>Click Me</button>
                        </div>
                    </div>
                    <h1 className={styles.header}>Tic Tac Toe</h1>
                </div>
            </>
        );
    }
}
