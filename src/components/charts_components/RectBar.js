
export const RectBar = ({ data, yScale, xScale, yValue, xValue }) =>
data.map((d) => (
  <g key={yValue(d)} className="--rect">
    <linearGradient id="gradient">
    <stop className="--start" offset="0%" />
    <stop className="--end" offset="50%" />
  </linearGradient>
  <rect
    x={0}
    y={yScale(yValue(d))}
    width={xScale(xValue(d))}
    height={yScale.bandwidth()}
  >
    <title>{xValue(d)}</title>
  </rect>
  </g>
));