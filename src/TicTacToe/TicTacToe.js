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
            <div>
                <h1 className={styles.header}>Tic Tac Toe</h1>
            </div>
        );
    }
}
