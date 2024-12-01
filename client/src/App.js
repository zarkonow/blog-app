import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import AddNewBlog from "./pages/add-blog";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exeact path="/" element={<Home />}></Route>
        <Route exeact path="/add-blog" element={<AddNewBlog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
