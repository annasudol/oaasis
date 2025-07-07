interface SubmenuConnectorProps {
  itemCount: number
}

export function SubmenuConnector({ itemCount }: SubmenuConnectorProps) {
  // Calculate height based on number of items (40px per item)
  const height = itemCount * 40 + 18 // Adding some padding

  // Calculate positions for horizontal lines (centered on each menu item)
  const getHorizontalLinePositions = () => {
    const positions = []
    for (let i = 0; i < itemCount; i++) {
      // Each item is 40px high, center line at 20px + (i * 40px) + 9px offset
      positions.push(29 + i * 40)
    }
    return positions
  }

  const horizontalPositions = getHorizontalLinePositions()
  const lastHorizontalY = horizontalPositions[horizontalPositions.length - 1]

  return (
    <svg
      width="16"
      height={height}
      viewBox={`0 0 16 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', left: '8px', top: '-6px' }}
    >
      {/* Main vertical line that stops before the last horizontal line */}
      <path d={`M1 1V${lastHorizontalY - 4}`} stroke="#88BBBB" strokeLinecap="round" />

      {/* Curved bottom section connecting to the last horizontal line */}
      <path
        d={`M1 ${lastHorizontalY - 4}C1 ${lastHorizontalY - 2} 2.79086 ${lastHorizontalY} 5 ${lastHorizontalY}H15`}
        stroke="#88BBBB"
        strokeLinecap="round"
      />

      {/* Horizontal connector lines for each menu item except the last */}
      {horizontalPositions.slice(0, -1).map((yPos, index) => (
        <path key={index} d={`M5.52941 ${yPos}H15`} stroke="#88BBBB" strokeLinecap="round" />
      ))}
    </svg>
  )
}
