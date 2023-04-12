import { useState } from 'react';
import styleToObject from 'style-to-object';

export const PaletteColor = ({ onChange }) => {
    const [bgColor, setBgColor] = useState();
  
    function handleColorChange(color) {
      setBgColor(color);
      onChange(color);
    }
  
    const allowedColorsStyle = styleToObject(`
      bottom: 225px;      
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
        <div  style={allowedColorsStyle}>
          <button style={optionStyle('#ff0000')} onClick={() => handleColorChange('#ff0000')} />
          <button style={optionStyle('#00ff00')} onClick={() => handleColorChange('#00ff00')} />
          <button style={optionStyle('#0000ff')} onClick={() => handleColorChange('#0000ff')} />
        </div>
      </div>
    );
  };