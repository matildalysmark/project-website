import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectInfoPage from "./Pages/ProjectInfoPage";
import SupplierGridPage from './Pages/SupplierGridPage'
import SupplierInfoPage from "./Pages/SupplierInfoPage";
import NotFoundPage from "./Pages/NotFoundPage";
import supplier_data from '../data/supplier_data.json';
import Header from "./components/Header/Header";
import { SidebarBox } from "./components/Sidebar/sidebarbox";

function App() {
  const supplierIds = Object.keys(supplier_data.suppliers);

  return (
    <HashRouter>
      <div style={{ display: 'flex', minHeight: "100vh", width: "100%" }}>
        <SidebarBox />

        <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
          
          <main style={{ flex: 1, overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<ProjectInfoPage />} />
              <Route path="/app" element={<SupplierGridPage />} />
              {supplierIds.map((supplierId) => (
                <Route
                  key={supplierId}
                  path={`/app/suppliers/${supplierId}`}
                  element={<SupplierInfoPage supplier_id={supplierId} />}
                />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Header />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
