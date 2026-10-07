import { useState } from "react";
import supplierData from "../../data/supplier_data.json";
import "../style/ComparePage.css";
import { RefreshCw } from "lucide-react";
import SupplierList from "../Widgets/SupplierList";
import { getAverageScore } from "../helper/scoreUtils";



export default function ComparePage() {
    const supplierIds = ["timberco_ab", "bich_bros_ab"];
    const [supplierListOpen, setSupplierListOpen] = useState(false);
    const selectedSuppliers = supplierIds.map((id) => supplierData.suppliers[id]);
    
    const metricsFromData = {
        carbon_footprint: "Carbon footprint",
        responsible_sourcing: "Responsible sourcing",
        labor_standards: "Labor standards",
    };

    const graphTitles = [
        "Overall score over time",
        "Carbon footprint over time",
        "Responsible sourcing over time",
        "Labor standards over time",
    ];

    return (
        <main>
            <h1>Compare suppliers</h1>
            <table className="compare-table">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        {selectedSuppliers.map((supplier) => (
                            <th scope="col" key={supplier.display_name}>
                                <span className="supplier-heading">
                                    {supplier.display_name}
                                    <button className="supplier-change-button" onClick={() => setSupplierListOpen(true)} >
                                        <RefreshCw size={18} />
                                    </button>
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th scope="row">Overall score</th>
                        {selectedSuppliers.map((supplier) => (
                            <td key={supplier.display_name}>{getAverageScore(supplier)}</td>
                        ))}
                    </tr>
                    {Object.entries(metricsFromData).map(([key, label]) => (
                        <tr key={key}>
                            <th scope="row">{label}</th>
                            {selectedSuppliers.map((supplier) => (
                                <td key={supplier.display_name}>{supplier[key]}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <th scope="row">Currently delivered treetypes</th>
                        {selectedSuppliers.map((supplier) => (
                            <td key={supplier.display_name}>{ /* bar graph with tree types here */ }</td>
                        ))}
                    </tr>
                    {graphTitles.map((label) => (
                        <tr key={label}>
                            <th scope="row">{label}</th>
                            {selectedSuppliers.map((supplier) => (
                                <td key={supplier.display_name}>{/* relevant graph here */}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {supplierListOpen && (
                <SupplierList onClose={() => setSupplierListOpen(false)} />
            )}
        </main>
    );
}