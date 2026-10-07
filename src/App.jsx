import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectInfoPage from "./Pages/ProjectInfoPage";
import SupplierGridPage from './Pages/SupplierGridPage'
import SupplierInfoPage from "./Pages/SupplierInfoPage";
import ComparePage from "./Pages/ComparePage";
import NotFoundPage from "./Pages/NotFoundPage";
import supplier_data from '../data/supplier_data.json';
import CustomScoreEdit from './components/CustomScoreEdit'

function App() {
  const supplierIds = Object.keys(supplier_data.suppliers);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProjectInfoPage />} />
        <Route path="/app" element={<SupplierGridPage />} />
        <Route path="/app/compare" element={<ComparePage />} />
        {supplierIds.map((supplierId) => (
          <Route
            key={supplierId}
            path={`/app/suppliers/${supplierId}`}
            element={<SupplierInfoPage supplier_id={supplierId} />}
          />
        ))}
        <Route path="/app/custom_score" element={<CustomScoreEdit />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
