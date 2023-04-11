import { useState } from 'react';
import styleToObject from 'style-to-object';

export const PalleteColor = () => {
    const [bgColor, setBgColor] = useState('#ffffff');

    function handleColorChange(color) {
        setBgColor(color);
    }

    const buttonStyle = {
        backgroundColor: bgColor,
        color: '#ffffff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const allowedColorsStyle = styleToObject(`
    display: flex;
    align-items: center;
  `);

    const optionStyle = (color) => styleToObject(`
    background-color: ${color};
    width: 24px;
    height: 24px;
    margin: 0 4px;
    vertical-align: middle;
    border: none;
    cursor: pointer;
  `);

    return (
        <div>
            <button className="color-button" style={buttonStyle}>
                Clique aqui
            </button>
            <div className="color-options" style={allowedColorsStyle}>
                <button style={optionStyle('#ff0000')} onClick={() => handleColorChange('#ff0000')} />
                <button style={optionStyle('#00ff00')} onClick={() => handleColorChange('#00ff00')} />
                <button style={optionStyle('#0000ff')} onClick={() => handleColorChange('#0000ff')} />
            </div>
        </div>
    );
}