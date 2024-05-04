import React from "react";
import ReactDOM from "react-dom";

// Note - React.createElement is the core part for react  but the syntax is  more complex so to tackle this we use JSX
//task 1 - print "Hello World from React!" in react

/*
  const heading = React.createElement("h1", { id:"hello"}, "Hello World from React!"); 
*/      // In react, to create element there is function createElement that pass 3 arguments (1st - create element, 2nd - add attributes,  3rd - Contexts)
 /* const root  = ReactDOM.createRoot(document.getElementById("root"));
 * root.render(heading);
 *
 **/

//task 2 - print the below scenorio in react using createElement

/**
 * <div id= "parent">
 *     <div id= "child1">
 *        <h1> I'am  h1 tag </h1>
 *        <h2> I'am  h2 tag </h2>
 *     </div>
 *     <div id= "child2">
 *        <h1> I'am  h1 tag </h1>
 *        <h2> I'am  h2 tag </h2>
 *     </div>
 * </div>
 *
 */

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I' am h1 tag"),
//     React.createElement("h2", {}, "I' am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I' am h1 tag"),
//     React.createElement("h2", {}, "I' am h2 tag"),
//   ]),
// ]);




// Note : The above code is little bit complicate so to resolve and optimize the code we use JSX
//Element
const Elementjsx = <h4>Hello Pankaj, Element checked</h4>
//React Functional Component 
const Title = () => <h1>this is the title section🚀 .</h1>;


const Heading = () => { 
return (
  <div>
<Title /> {/*component composition - functional component which is used in one another.*/}
<h2>This is the heading section.🚖</h2>
{Elementjsx}
</div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

