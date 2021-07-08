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
            <div className="container">
                <h1 className="text-center text-success">Tic Tac Toe</h1>
            </div>
        );
    }
}
