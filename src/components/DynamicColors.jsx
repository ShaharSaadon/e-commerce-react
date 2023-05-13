import React from 'react'

export function DynamicColors(props) {

  const { colors, selectedColor, onClickColor } = props;

  return (
    <section >
      <div className="color-palette">
        {colors.map((value, index) => (
          <div
            key={index}
            style={{ backgroundColor: value, border: value === selectedColor ? '2px solid black' : 'none' }}
            className="color"
            onClick={() => onClickColor(value)}
          ></div>))}
      </div>
    </section >
  )
}
