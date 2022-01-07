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
                            this.props.onClick;
                        }}>
                    </button>
                    
                </div>
            </>
        );
    }
}
