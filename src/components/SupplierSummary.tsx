type SupplierSummaryData = {
    carbon_footprint: number;
    responsible_sourcing: number;
    labor_standards: number;
};

export default function SupplierSummary({ data }: { data: SupplierSummaryData }) {


    return (
        <div>
            <p>Average score: {
            ((data["carbon_footprint"] + 
            data["responsible_sourcing"] + 
            data["labor_standards"]) / 3).toFixed(1)}</p>
            <p>Carbon footprint: {data["carbon_footprint"]}</p>
            <p>Responsible sourcing: {data["responsible_sourcing"]}</p>
            <p>Labor standards: {data["labor_standards"]}</p>
        </div>
    )
}