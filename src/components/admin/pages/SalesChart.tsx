export default function SalesChart() {
  const dates = ['2025-10-22', '2025-10-23', '2025-10-24', '2025-10-25', '2025-10-26', '2025-10-27', '2025-10-28'];
  const salesData = [1200000, 1150000, 800000, 1150000, 1500000, 1200000, 950000];
  const billingData = [1250000, 1200000, 850000, 1200000, 1550000, 1300000, 1000000];

  const maxValue = 2000000;
  const minValue = 0;
  const chartWidth = 800;
  const chartHeight = 400;
  const paddingTop = 40;
  const paddingBottom = 60;
  const paddingLeft = 80;
  const paddingRight = 40;

  const graphWidth = chartWidth - paddingLeft - paddingRight;
  const graphHeight = chartHeight - paddingTop - paddingBottom;

  const getX = (index: number) => {
    return paddingLeft + (index * graphWidth) / (dates.length - 1);
  };

  const getY = (value: number) => {
    return paddingTop + graphHeight - ((value - minValue) / (maxValue - minValue)) * graphHeight;
  };

  const salesPoints = salesData.map((value, index) => ({
    x: getX(index),
    y: getY(value),
    value,
  }));

  const billingPoints = billingData.map((value, index) => ({
    x: getX(index),
    y: getY(value),
    value,
  }));

  const salesPolyline = salesPoints.map(p => `${p.x},${p.y}`).join(' ');
  const billingPolyline = billingPoints.map(p => `${p.x},${p.y}`).join(' ');

  const yAxisLabels = [0, 500000, 1000000, 1500000, 2000000];

  return (
    <div className="bg-white rounded-lg p-10 shadow-sm border border-gray-200">
      <h3 className="text-sm font-semibold text-gray-900 mb-6">昨日までの売上推移（直近7日間）</h3>
      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
        >
          {yAxisLabels.map((label) => {
            const y = getY(label);
            return (
              <g key={label}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={chartWidth - paddingRight}
                  y2={y}
                  stroke="#E0E0E0"
                  strokeWidth="1"
                />
                <text
                  x={paddingLeft - 10}
                  y={y + 5}
                  textAnchor="end"
                  fill="#333333"
                  fontSize="12"
                >
                  {label.toLocaleString()}円
                </text>
              </g>
            );
          })}

          {dates.map((date, index) => {
            const x = getX(index);
            return (
              <g key={date}>
                <line
                  x1={x}
                  y1={paddingTop}
                  x2={x}
                  y2={chartHeight - paddingBottom}
                  stroke="#E0E0E0"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={chartHeight - paddingBottom + 20}
                  textAnchor="middle"
                  fill="#333333"
                  fontSize="11"
                >
                  {date}
                </text>
              </g>
            );
          })}

          <polyline
            points={salesPolyline}
            fill="none"
            stroke="#4A90E2"
            strokeWidth="2"
          />

          {salesPoints.map((point, index) => (
            <circle
              key={`sales-${index}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#4A90E2"
            />
          ))}

          <polyline
            points={billingPolyline}
            fill="none"
            stroke="#FF8C42"
            strokeWidth="2"
          />

          {billingPoints.map((point, index) => (
            <circle
              key={`billing-${index}`}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#FF8C42"
            />
          ))}

          <g transform={`translate(${chartWidth - paddingRight - 200}, ${paddingTop})`}>
            <g transform="translate(0, 0)">
              <circle cx="8" cy="8" r="4" fill="#4A90E2" />
              <text x="20" y="12" fill="#333333" fontSize="12">
                売上金額(税別)
              </text>
            </g>
            <g transform="translate(0, 25)">
              <circle cx="8" cy="8" r="4" fill="#FF8C42" />
              <text x="20" y="12" fill="#333333" fontSize="12">
                請求金額(税込)
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
