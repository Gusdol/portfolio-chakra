import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Proyectos } from "../pages/Proyectos";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
};
