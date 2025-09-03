import {BrowserRouter, Routes, Route} from "react-router"
import { ProfilePage } from "./pages/ProfilePage";
import { CategoryViewPage } from "./pages/CategoryViewPage";
import { ViewPage } from "./pages/ViewPage";
import { SearchPage } from "./pages/SearchPage";
import { HomePage } from "./pages/HomePage";
// 1 ---> 0.25rem ---> 4px
// 4 ---> 1rem ---> 16px
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/:productId/view" element={<ViewPage />}/>
        <Route path="/category/:item" element={<CategoryViewPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </BrowserRouter>    
  )
}
export default App;