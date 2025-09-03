import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Components/Footer"
import {Header,Button} from "./Components/Header"
import Main from "./Components/Main"

const domRoot = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(domRoot);

const App = () =>{
    return(
        <div>
            <Header />
            <Main />
            <Footer />
            <Button />
        </div>
    );
}

ReactRoot.render(App());
