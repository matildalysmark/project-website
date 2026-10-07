import { Chart } from "react-google-charts";

//For more info see https://www.react-google-charts.com/

/**
 * @param {Object} props
 * @param {Array<[string, string]>} props.axes - The name of the chart axes.
 * @param {Array<[string, number]>} props.inputData - The data to display. Format: [[location1, value1], [location2, value2], ...]
 * @param {Array<string>} [props.valueColor] - The colors to use for the value axis.
 * @param {string} [props.backgroundColor] - The background color of the chart.
 * @returns {JSX.Element}
 * 
 * Renders a geo chart using the supplied axes and data. 
 * axes should be an array of two strings representing the names of the location and value axes.
 * inputData should be an array of [location, value] pairs, where location is a string and value is a number.
 *
 * @example
 * <RegularGeoChart
 *   axes={["Country", "Value"]}
 *   inputData={[["Sweden", 56], ["Norway", 100], ["Denmark", 74]]}
 *   valueColor={["#e0f7fa", "#006064"]}
 *   backgroundColor="lightblue"
 * />
 */
function RegularGeoChart({ axes, inputData, valueColor, backgroundColor }) {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = inputData[selection[0].row];
            console.log("Selected : " + region);
          },
        },
      ]}
      options={{
        colorAxis: { colors: valueColor},
        backgroundColor: backgroundColor,
      }}
      chartType="GeoChart"
      width="100%"
      height="100%"
      data={[axes, ...inputData]}
    />
  );
}
export default RegularGeoChart;
