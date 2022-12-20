import "./styles/style.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyBooks } from "./pages/MyBooks";
import { Book } from "./pages/Book";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<MyBooks />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>
      <MuiBottomNavigation />
    </>
  );
}

export default App;
