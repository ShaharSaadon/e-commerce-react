import React from 'react'
import { useSelector } from 'react-redux'

export function DynamicColors() {
  const colors = useSelector((storeState) => storeState.productModule.colors)

  return (
    <section>
      <div className="color-palette">
        {colors.map((value, index) => (
          <div key={index} style={{ backgroundColor: value }} className='color'> </div>
        ))}
      </div>
    </section>
  )
}
