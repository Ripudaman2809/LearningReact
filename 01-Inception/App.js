// React.createElement() returns a JS Object which is a React element
const reactHeading = React.createElement("h1",{
    id:"heading",
    xyz: "abc"
},"Hello World from React!");

const reactRoot = ReactDOM.createRoot(document.querySelector("#rootReact"));
// reactRoot.render(reactHeading);

//create structure as well
{/*
<div id="parent">
    <div id ="child1">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id ="child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div> 
*/}

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
