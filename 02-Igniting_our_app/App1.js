import React from "react";
import ReactDOM from "react-dom/client";


const reactRoot = ReactDOM.createRoot(document.querySelector("#rootReact"));
const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child1"},
        [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
    ),
    React.createElement("div",
        {id:"child2"},
        [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
    )]
);
reactRoot.render(parent);