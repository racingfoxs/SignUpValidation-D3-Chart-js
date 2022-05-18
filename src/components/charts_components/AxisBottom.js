export const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.ticks().map((tickValue) => (
    <g
      key={tickValue}
      className="--chart--container"
      transform={`translate(${xScale(tickValue)}, 0)`}
    >
      <line y2={innerHeight} />
      <text dy="1em" style={{ textAnchor: "middle" }} y={innerHeight + 3}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ));
