import { HomePage } from "./HomePage";
import {SearchPage} from "./SearchPage"
import {AboutPage} from "./AboutPage"
import { BrowserRouter, Routes, Route } from "react-router";
import "../components/index.css"
const App = () =>{

  return(
    <div>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<h1>Page not found</h1> }/>
    </Routes>
  </BrowserRouter>
    </div>
  )
}
export default App;