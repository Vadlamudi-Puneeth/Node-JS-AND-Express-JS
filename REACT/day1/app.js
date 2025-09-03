// const rootContainer = document.getElementById("root");
// const ul = document.createElement("ul");

// const li1 = document.createElement("li");
// li1.innerText = "list-item1";
// ul.appendChild(li1);
// const li2 = document.createElement("li");
// li2.innerText = "list-item2";
// ul.appendChild(li2);

// rootContainer.appendChild(ul)

// ---------------------------

const rootContainer = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(rootContainer);

// const li1 = React.createElement("li",{
//     className: "fancy-text",

// },"Item 1");
// console.log(li1);

const data = 
{
    $$typeof: Symbol("react.element"),
    "type": "li",
    "key": null,
    "ref": null,
    "props": {
        "className": "fancy-text",
        "children": "Item 1"
    },
    "_owner": null,
    "_store": {}
}
console.log(data)

const li1 = React.createElement("li",{},"Item 1");
const li2 = React.createElement("li",{},"Item 2");
const ul = React.createElement("ul",{},li1,li2);

ReactRoot.render(ul);
//If we want to create this is mandatory $$typeof: Symbol(react.element)