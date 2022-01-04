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
                            this.onClick(buttonId);
                        }}>
                    </button>
                    
                </div>
            </>
        );
    }
}
