import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Always enclose JSX in paranthesis if JSX spans over multiple lines, 
// if JSX is in single line then paranthesis is not needed.


//In JSX to give class to an element we use className and not class
//React Element
const jsxHeading = (<h1 className="heading">Namaste React from JSX!</h1>);

//React Components
//1. Functional Components - Simple JS functions that return JSX is called functional components in React.
//2. Class based Components

//Every component should start with a capital letter
const HeadingComponent1 = () =>{
    return (<h1 className="heading"> Namaste Functional Based Component!</h1>)
}

const HeadingComponent2 = () => (<h1 className="heading"> Namaste Functional Based Component!</h1>); 

//This is called Component Composition
const BodyComponent = () => (
    <>
    <HeadingComponent1/>
    <HeadingComponent2/>
    <h2>Body of Namaste React</h2>
    </>
);


// Both func1 and func2 are the same thing
const func1 = () =>{
    return true;
}

const func2 = () => true;


//Using {} we can run JS expressions inside of JSX
const BodyComponent2 = () => (
    <>
    {/* Here 300 will be output */}
    {100 +200} 
    <h2>Body of Namaste React</h2>
    </>
);

//We can write React Element inside another React Element{}, React Element inside React Component{}, 
// React Component inside React Element, React Component inside React Component as well

const BodyComponent3 = () => (
    <>
    {jsxHeading}
    <h2>Body of Namaste React</h2>
    </>
);

const jsxHeading2 = (<div className="heading">Namaste React from JSX!{jsxHeading}</div>) ;

const HeadingComponent4 = () =>{
    return (<>
        <h1 className="heading"> Namaste Functional Based Component!</h1>
        {/* All 3 mean the same thing */}
        {HeadingComponent1()}
         <HeadingComponent1/>
        <HeadingComponent1></HeadingComponent1>
        </>
    )
}
//If we are hitting an API and the API tries some Cross Site Scripting or tries do some injection JSX automatically prevents it 
// from happening because it does not blindly load the data response from the api. It does a ot of things at the back-end.




root.render(<HeadingComponent4/>);

