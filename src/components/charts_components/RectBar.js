export const RectBar = ({ data, yScale, xScale, yValue, xValue, tipFormat }) =>
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
        <title>{tipFormat(xValue(d))}</title>
      </rect>
    </g>
  ));
