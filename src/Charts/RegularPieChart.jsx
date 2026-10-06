import { Chart } from "react-google-charts";

//For more info see https://www.react-google-charts.com/

/**
 * @param {Object} props
 * @param {Array<[string, string]>} props.axes - The name of the chart axes.
 * @param {Array<[string, number]>} props.inputData - The data to display. Format: [[label1, value1], [label2, value2], ...]
 * @param {string} [props.title] - The chart title.
 * @param {string} [props.backgroundColor] - The background color of the chart.
 * @param {Array<string>} [props.colors] - The colors to use for the pie slices.
 * @returns {JSX.Element}
 * 
 * @description
 * Renders a pie chart using the supplied axes and data. 
 * axes should be an array of two strings representing the names of the label and value axes.
 * inputData should be an array of [label, value] pairs, where label is a string and value is a number.
 *
 * @example
 * <RegularPieChart
 *   axes={["TreeType", "Amount"]}
 *   inputData={[["Pine", 56], ["Oak", 86], ["Birch", 74]]}
 *   title="Sample Chart (PieChart)"
 *   backgroundColor="lightblue"
 *   colors={["#2e7d32", "#795548", "#9e9e9e"]}
 * />
 */
function RegularPieChart({ axes, inputData, title, backgroundColor, colors }) {
  return (
    <Chart
      chartType="PieChart"
      data={[axes, ...inputData]}
      options={{
        title: title,
        backgroundColor: backgroundColor,
        colors: colors
      }}
      width={"100%"}
      height={"300px"}
      legendToggle
    />
  );
}

export default RegularPieChart;