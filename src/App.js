import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {BondsList} from "./app/bond/BondsList";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <div className="App-header">
                                <BondsList issues={} />
                            </div>
                        </Route>
                        <Route path="/users">
                            <div className="App-header">
                                Equity
                            </div>
                        </Route>
                        <Route path="/">
                            <header className="App-header">
                                <p>
                                    Welcome.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                                <p>
                                    Seriously, do it.
                                </p>
                            </header>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
