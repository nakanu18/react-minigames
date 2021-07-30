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
    onPress = buttonId => {
        console.log(hello);
    }
    }

    render() {
        return (
            <>
                <div>
                    <h1 className={styles.header}>Tic Tac Toe</h1>
                    <div className={styles.box}>
                        <div>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 0")}}>Click Me</button>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 1")}}>Click Me</button>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 2")}}>Click Me</button>
                        </div>
                        <div>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 3")}}>Click Me</button>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 4")}}>Click Me</button>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 5")}}>Click Me</button>
                        </div>
                        <div>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 6")}}>Click Me</button>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 7")}}>Click Me</button>
                            <button className={styles.button} onPress={()=>{ this.onPress("button 8")}}>Click Me</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
