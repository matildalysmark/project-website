import { getAverageScore } from "../helper/scoreUtils";

export default function SupplierSummary({ data }) {
    return (
        <div>
            <p>Average score: {getAverageScore(data)}</p>
            <p>Carbon footprint: {data["carbon_footprint"]}</p>
            <p>Responsible sourcing: {data["responsible_sourcing"]}</p>
            <p>Labor standards: {data["labor_standards"]}</p>
        </div>
    )
}