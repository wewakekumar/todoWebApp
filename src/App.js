import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return(
        <div>
            <h1>Hello from react</h1>
        </div>
    )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));