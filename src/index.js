import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./components/header/header";
import List from './components/list/list';

const App = () => {
    return (
        <div>
           <Header />
           <List />
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById("root")
);
