import React from 'react';
import ReactDOM from 'react-dom/client'
const div = React.createElement("div", { id: "div1" },
    React.createElement(
        "div",
        { id: 'div 2' },
        [React.createElement("h1", {}, "I am Heading"),
        React.createElement("h2", {}, "I am Heading 2")
        ]
    )
)


const heading = React.createElement("h1", { id: 'heading' }, "Hello world !!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(div)
root.render(heading);