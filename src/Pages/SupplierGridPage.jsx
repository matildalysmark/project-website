import '../style/SupplierGridPage.css';
import supplier_data from '../../data/supplier_data.json';
import SummaryCard from '../Widgets/SummaryCard';
import FilterButton from '../Widgets/FilterButton';

export default function SupplierGridPage() {
    const supplierIds = Object.keys(supplier_data.suppliers);

    return (
        <section id="home-page">
            <div className="hero"></div>
            <h1 className="home-font">
                Suppliers
            </h1>
            <div className='top-grid-container'>
                <div className='grid'>
                    <div className="filter-row-container">
                        <FilterButton />
                    </div>

                    {supplierIds.map((supplierId) => (
                        <SummaryCard key={supplierId} id={supplierId} />
                    ))}

                </div>
            </div>
        </section>
    );
}
