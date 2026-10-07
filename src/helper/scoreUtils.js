export function getAverageScore(supplierData) {
    return ((supplierData["carbon_footprint"] +
            supplierData["responsible_sourcing"] +
            supplierData["labor_standards"]) / 3).toFixed(1)
}