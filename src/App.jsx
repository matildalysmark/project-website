import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectInfoPage from "./Pages/ProjectInfoPage";
import SupplierGridPage from './Pages/SupplierGridPage'
import SupplierInfoPage from "./Pages/SupplierInfoPage";
import NotFoundPage from "./Pages/NotFoundPage";
import supplier_data from '../data/supplier_data.json';
import HomePage from "./Pages/HomePage";

function App() {
  const supplierIds = Object.keys(supplier_data.suppliers);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProjectInfoPage />} />
        <Route path="/app" element={<SupplierGridPage/>} />
        {supplierIds.map((supplierId) => (
          <Route
            key={supplierId}
            path={`/app/suppliers/${supplierId}`}
            element={<SupplierInfoPage supplier_id={supplierId} />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
