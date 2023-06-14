import { useState } from 'react';
import styleToObject from 'style-to-object';
import Style from './Notes.module.css'

export const PaletteColor = ({ onChange }) => {
  const [, setBgColor] = useState();

  function handleColorChange(color) {
    setBgColor(color);
    onChange(color);
  }

  const allowedColorsStyle = styleToObject(`
      width: 100%;
      bottom: 102%;      
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
      <div className={Style.palette} style={allowedColorsStyle}>
        <button style={optionStyle('#fcff82')} onClick={() => handleColorChange('#fcff82')} />
        <button style={optionStyle('#f70776')} onClick={() => handleColorChange('#f70776')} />
        <button style={optionStyle('#f96d00')} onClick={() => handleColorChange('#f96d00')} />
        <button style={optionStyle('#00bbf0')} onClick={() => handleColorChange('#00bbf0')} />
        <button style={optionStyle('#f83e4b')} onClick={() => handleColorChange('#f83e4b')} />
        <button style={optionStyle('#8971d0')} onClick={() => handleColorChange('#8971d0')} />
      </div>
  );
};