/**
 * Converts one supplier's monthly data into the format used by RegularLineChart.
 *
 * @param {Object} supplier - A supplier object, e.g. data.suppliers["timberco_ab"].
 * @param {string} [metric="amount"] - Tree type value to plot: "amount", "carbon_footprint" or "responsible_sourcing".
 * @returns {{axes: string[], inputData: Array<Array<string|number|null>>}}
 *   axes: ["Month", "pine", "oak", ...]
 *   inputData: [["2026-01", 123, 123, ...], ["2026-02", ...], ...]
 *   Tree types missing in a month get null (a gap in the line).
 *
 * @example
 * const { axes, inputData } = supplierToLineChartData(data.suppliers.timberco_ab, "amount");
 * <RegularLineChart axes={axes} inputData={inputData} title="Amount" />
 */
export function supplierToLineChartData(supplier, metric = "amount") {
  const months = supplier?.months ?? {};
  const monthKeys = Object.keys(months).sort();

  const treeTypes = [];
  for (const month of monthKeys) {
    for (const tree of Object.keys(months[month]?.tree_types ?? {})) {
      if (!treeTypes.includes(tree)) treeTypes.push(tree);
    }
  }

  const axes = ["Month", ...treeTypes];
  const inputData = monthKeys.map((month) => [
    month,
    ...treeTypes.map((tree) => months[month]?.tree_types?.[tree]?.[metric] ?? null),
  ]);

  return { axes, inputData };
}

/**
 * Reads supplier month - treetype value data from a JSON object for a specific supplier and returns it in the format used by RegularLineChart, RegularColumnChart, and RegularScatterChart.
 *
 * @param {{suppliers: Object}} json - Object with a "suppliers" key.
 * @param {string} supplierId - Key such as "timberco_ab".
 * @param {string} [metric="amount"] - Optional metric to plot: "amount", "carbon_footprint" or "responsible_sourcing". Defaults to "amount".
 * @returns {{axes: string[], inputData: Array<Array<string|number|null>>}}
 * 
 * @example
 * const { axes, inputData } = jsonToChartData(data, "timberco_ab", "amount");
 * <RegularLineChart axes={axes} inputData={inputData} title="Amount" />
 */
export function jsonToChartData(json, supplierId, metric = "amount") {
  return supplierToLineChartData(json?.suppliers?.[supplierId], metric);
}

export default jsonToChartData;
