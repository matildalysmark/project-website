import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectInfoPage from "./Pages/ProjectInfoPage";
import SupplierGridPage from './Pages/SupplierGridPage'
import SupplierInfoPage from "./Pages/SupplierInfoPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProjectInfoPage />} />
        <Route path="/app" element={<SupplierGridPage />} />
        <Route path="/app/supplier" element={<SupplierInfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
