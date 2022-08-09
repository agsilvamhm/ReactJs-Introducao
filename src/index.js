import React from 'react';
import ReactDom from 'react-dom';
import "./sytyle.css"

const App = () => {
    return (
        <div className="App">
            Hello world!
        </div>
    )
}

const rootElement  = documento.getElementById("root")
ReactDOM.render(<App />, rootElement)