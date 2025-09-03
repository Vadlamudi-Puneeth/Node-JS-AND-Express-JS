
// const domRoot = document.getElementById("root");
// const ReactRoot = ReactDOM.createRoot(domRoot);

// const head = React.createElement("h1",{},"Title");
// const para = React.createElement("p",{},"Description");
// const div = React.createElement("div",{},[head,para]);

// ReactRoot.render(div);

// ---------------------------------------------------
// const card1 = (
//     <div className="card">
//         <h1>Title</h1>
//         <p>Description</p>
//     </div>
// );

// const card2 = (
//     <div className="card">
//         <h1>Space</h1>
//         <p>Description</p>
//     </div>
// );

// const card3 = (
//     <div className="card">
//         <h1>foot</h1>
//         <p>Description</p>
//     </div>
// );

// const card = (
//     <div>
//         {card1}
//         {card2}
//         {card3}
//     </div>
// );

// const domRoot = document.getElementById("root");
// const ReactRoot = ReactDOM.createRoot(domRoot);
// ReactRoot.render(card);

// ---------------------------------------------------

const Card1 = (
    <div className="card" >
        <h1>title</h1>
        <p>Description</p>
    </div>
);

const Card = (obj) =>{
    return(
        <div className="card" >
            <h1>{obj.title}</h1>
            <p>------------</p>
        </div>
    );
}

const Container = (
    <div>
        {Card1}
        {Card({title:"Title"})}
        {Card({title:"Invitation"})}
    </div>
);

const domRoot = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(domRoot);
ReactRoot.render(Container);


