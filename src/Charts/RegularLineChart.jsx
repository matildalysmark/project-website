import { Chart } from "react-google-charts";

//For more info see https://www.react-google-charts.com/

/**
 * @param {Object} props
 * @param {Array<[string, string]>} props.axes - The name of the chart axes.
 * @param {Array<[number, number]>} props.inputData - The data to display. Format: [[x1, y1], [x2, y2], ...]
 * @param {string} [props.title] - The chart title.
 * @param {string} [props.backgroundColor] - The background color of the chart.
 * @returns {JSX.Element}
 * 
 * Renders a line chart using the supplied axes and data. 
 * axes should be an array of two strings representing the names of the x and y axes.
 * inputData should be an array of [x, y] pairs, where x is a number and y is a number.
 * backgroundColor sets the background color of the chart.
 *
 * @example
 * <RegularLineChart
 *   axes={["Year", "Score"]}
 *   inputData={[[2000, 56], [2005, 86], [2010, 74]]}
 *   title="Sample Line Chart"
 *   backgroundColor="lightblue"
 * />
 */
function RegularLineChart({ axes, inputData, title, backgroundColor }) {
  return (
    <Chart
      chartType="LineChart"
      data={[axes, ...inputData]}
      options={{
        title: title,
        backgroundColor: backgroundColor
      }}
      legendToggle
    />
  );
}
export default RegularLineChart;
