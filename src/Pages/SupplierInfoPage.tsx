import "../style/SupplierInfoPage.css";
import SupplierDataTable from "../components/SupplierDataTable";
import SupplierSummary from "../components/SupplierSummary";

import suppliers_data from '../../data/supplier_data.json'

type SupplierId = keyof typeof suppliers_data.suppliers;

export default function SupplierInfoPage({ supplier_id }: { supplier_id: SupplierId }) {
    const data = suppliers_data.suppliers[supplier_id]

    return (
        <div>
            <h1>{supplier_id}</h1>
            <br />
            <div>
                <h2>Summary</h2>
                <SupplierSummary data={data}/>
            </div>
            <br />
            <div>
                <h2>Score over time</h2>
                graph goes here
            </div>
            <br />
            <div>
                <h2>Data</h2>
                <SupplierDataTable data={data} />
            </div>
        </div>
    );
}
