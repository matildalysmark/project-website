import { X } from "lucide-react";
import supplierData from "../../data/supplier_data.json";
import "../style/SupplierList.css";

export default function SupplierList({ onClose }) {
    return (
        <div className="supplier-list-backdrop">
            <section className="supplier-list">
                <div className="supplier-list-header">
                    <h2>Suppliers</h2>
                    <button className="supplier-list-close" onClick={onClose}>
                        <X size={22} />
                    </button>
                </div>
                <ul className="supplier-list-items">
                    {Object.entries(supplierData.suppliers).map(([id, supplier]) => (
                        <li key={id}>
                            <button className="supplier-list-item">
                                {supplier.display_name}
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
