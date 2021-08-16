import React from 'react';
import useMagicColor from '../../Hooks/useMagicColor';
import './MagicColor.scss'
function MagicColor(props) {
    const { color } = useMagicColor()
    return (
        <div className="magicColor" style={{ backgroundColor: color }}>

        </div>
    );
}

export default MagicColor;