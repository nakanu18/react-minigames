import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TicTacToe from "./TicTacToe/TicTacToe";
import styles from "./TicTacToe/styles.module.css";

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tictactoe">TicTacToe</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/tictactoe">
                        <TicTacToe />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2 className={styles.header}>Home</h2>;
}
