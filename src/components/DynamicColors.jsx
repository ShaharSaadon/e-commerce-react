import React from 'react'

export function DynamicColors(props) {

  const { colors, selectedColors, handleClick } = props;
  console.log('selectedColors:', selectedColors)
  return (
    <section >
      <div className="color-palette">
        {colors.map((value, index) => (
          <div
            key={index}
            style={{ backgroundColor: value }}
            className={selectedColors?.includes(value) ? 'color selected' : 'color'}
            onClick={handleClick}
          ></div>))}
      </div>
    </section >
  )
}
