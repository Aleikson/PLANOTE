import { useState } from 'react';
import styleToObject from 'style-to-object';

export const PaletteColor = ({ onChange }) => {
  const [, setBgColor] = useState();

  function handleColorChange(color) {
    setBgColor(color);
    onChange(color);
  }

  const allowedColorsStyle = styleToObject(`
      width: 100%;
      top: 175px;      
      position: absolute;
      display: flex;
      alignItems: center;
    `);

  const optionStyle = (color) =>
    styleToObject(`
      backgroundColor: ${color};
      width: 24px;
      height: 24px;
      margin: 0 4px;
      verticalAlign: middle;
      border: none;
      cursor: pointer;
    `);

  return (
    <div>
      <div style={allowedColorsStyle}>
        <button style={optionStyle('#fcff82')} onClick={() => handleColorChange('#fcff82')} />
        <button style={optionStyle('#8ed2c9')} onClick={() => handleColorChange('#8ed2c9')} />
        <button style={optionStyle('#d55b3e')} onClick={() => handleColorChange('#d55b3e')} />
        <button style={optionStyle('#f4aeba')} onClick={() => handleColorChange('#f4aeba')} />
        <button style={optionStyle('#97cba9')} onClick={() => handleColorChange('#97cba9')} />
      </div>
    </div>
  );
};