import { scaleBand, scaleLinear, max, format } from "d3";
import { AxisBottom } from "./charts_components/AxisBottom";
import { AxisLeft } from "./charts_components/AxisLeft";
import { RectBar } from "./charts_components/RectBar";
import "./charts_components/charts_components.scss";

const width = 768;
const height = 432;

const margin = { top: 20, right: 20, bottom: 90, left: 80 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const yValue = (d) => d.Country;
const xValue = (d) => d.Population;

const Chart = ({ data }) => {
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <>
      <svg viewBox="0 0 768 432" preserveAspectRatio="xMinYMin meet">
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={format(".2s")}
          />
          <AxisLeft yScale={yScale} />
          <text
            className="__bottomLabel"
            x={innerWidth / 2}
            y={innerHeight + 50}
            textAnchor="middle"
          >
            Population
          </text>
          <RectBar
            data={data}
            yScale={yScale}
            xScale={xScale}
            yValue={yValue}
            xValue={xValue}
            tipFormat={format(".2s")}
          />
        </g>
      </svg>
    </>
  );
};

export default Chart;
