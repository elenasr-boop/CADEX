import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ContactPage } from "./pages/contacts";
import { NotFoundPage } from "./pages/notFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
