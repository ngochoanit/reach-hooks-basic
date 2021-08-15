import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { localstored } from '../../utilities/storage';
import { COLOR_ARR } from '../../utilities/constant'
import './ColorBox.scss'

ColorBox.propTypes = {

};

function ColorBox(props) {
    //initialColor state
    const initialColor = () => {
        return localstored.get() || COLOR_ARR[0]
    }
    console.log(typeof initialColor)
    const [color, setColor] = useState(initialColor)
    const onChangeColor = () => {
        const index = Math.trunc(Math.floor(Math.random() * 4))
        setColor(COLOR_ARR[index])
        localstored.set(COLOR_ARR[index])
    }
    return (
        <div className="ColorBox">
            <div
                className="box"
                style={{ backgroundColor: color }}
                onClick={onChangeColor}></div>
        </div >
    );
}

export default ColorBox;
