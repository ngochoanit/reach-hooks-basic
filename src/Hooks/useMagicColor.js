import React, { useEffect, useState } from 'react';

const getRandomColor = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`
}

function useMagicColor() {
    const [color, setColor] = useState('')
    useEffect(() => {
        const colorTimeout = setTimeout(() => {
            setColor(getRandomColor())
        }, 1000)
        return () => {
            clearTimeout(colorTimeout)
        }
    }, [color])
    return { color: color }
}

export default useMagicColor;