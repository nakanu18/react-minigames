import React, { Component } from "react";

import styles from "./styles.module.css";

export default class Tile extends Component {
    render() {
        return (
            <>
                <div>
                    <button
                        className={styles.button}
                        onClick={() => {
                            if (this.props.onClick) {
                                this.props.onClick();
                            }
                        }}>
                        {this.props.value}
                    </button>
                </div>
            </>
        );
    }
}
