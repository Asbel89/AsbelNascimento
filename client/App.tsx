import "./global.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PositionDetail from "./pages/PositionDetail";
import CreateCV from "./pages/CreateCV";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import { ChatWidget } from "./components/ChatWidget";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/create-cv" element={<CreateCV />} />
      <Route path="/position/:positionId" element={<PositionDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ChatWidget />
  </BrowserRouter>
);

createRoot(document.getElementById("root")!).render(<App />);
