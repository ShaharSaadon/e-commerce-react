export function DynamicColors({ allColors, selectedColor, handleClick }) {
  const isSelected = color => {
    if (!selectedColor) return false;
    if (Array.isArray(selectedColor)) {
      return selectedColor.find(c => c.label === color.label);
    } else {
      return color.label === selectedColor;
    }
  }
  return (
    <section>
      <div className="color-palette">
        {allColors.map((color, index) => (
          <div
            key={index}
            id={color.label}
            style={{ backgroundColor: color.value }}
            className={isSelected(color) ? 'color selected' : 'color'}
            onClick={() => handleClick(color)}
          ></div>
        ))}
      </div>
    </section>
  );
}