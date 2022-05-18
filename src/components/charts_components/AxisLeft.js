export const AxisLeft = ({ yScale }) =>
yScale.domain().map((tickValue) => (
  <g key={tickValue} className="--chart--container">
  <text    
    x={-5}
    y={yScale(tickValue) + yScale.bandwidth() / 2}
    dy="0.3em"
    style={{ textAnchor: "end" }}
  >
    {tickValue}
  </text>
  </g>
));