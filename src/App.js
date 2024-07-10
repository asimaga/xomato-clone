import Homepage from "./components/home/homepagee";
import Searchpage from "./components/searchmenu/search";
import { Routes,Route } from "react-router-dom";
import RestaurentPage from "./components/restaurents/restaurenthome";

function App() {
  return ( <>
    <main className="container-fluid"> 
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/search-page/:meal_id" element={<Searchpage/>} />
      <Route path="/resthome/:id" element={<RestaurentPage/>}/>
      </Routes>
    </main>
    </>
  );
}

export default App;
