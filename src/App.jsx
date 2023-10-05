import "./App.css";
import { Route, Routes } from "react-router-dom";
import PhotosContextProvider from "./context/PhotosContext";
import Home from "./views/Home"
import Favorites from "./views/Favorites"
import Navigation from "./components/Navigation"
import NotFound from "./views/NotFound";
function App() {
  return (
    <>
      
      <div>
        <Navigation />
        <PhotosContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </PhotosContextProvider>
      </div>
    </>
  );
}

export default App;
