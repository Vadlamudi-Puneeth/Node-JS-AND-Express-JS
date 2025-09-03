import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App-3.jsx'

const domRoot = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(domRoot);

ReactRoot.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
