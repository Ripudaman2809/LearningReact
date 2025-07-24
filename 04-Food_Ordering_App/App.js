import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import BodyContainer from "./src/components/BodyContainer";

/* High Level Design - 
   # Header
        -Logo
        -Nav Items
   # Body 
        -Search
        -RestaurantContainer
        -Cards
   # Footer
        -Copyright
        -Links
        -Address
        -Contact
*/

// New way of writing css

// Treat props as arguments to a function (functional component)
// Props => Functional Components same as Arguments => Functions

//Whenever we want to pass data dynamically to a React component we pass it through props
// All the props that you pass will be wrapped under the props object and then will be given to the React component
// props are read-only, can't edit them
const root = ReactDOM.createRoot(document.querySelector("#root"));


const AppLayout = () =>{
   return(
        <div id="applayout">
            <Header/>
            <BodyContainer/>
        </div>  
    )
};

root.render(<AppLayout/>);



// 2 types of imports and exports
//Use named exports only when you have to export more than one thing
// Can export same component using both types of exports
// Default and Named
// export default MyComponent; //Default export
// export const MyComponentNamed = () => (<h1></h1>)  or export {MyComponent}//Named export

// import MyComponent from "path" //Default import
// import {MyComponent as  mc} from "path" //Named import



//Separation of Concern -> Single responsibilty principle



