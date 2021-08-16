import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {

};
const formatDate = (now) => {
    const hours = `0${now.getHours()}`.slice(-2);
    const minutes = `0${now.getMinutes()}`.slice(-2);
    const seconds = `0${now.getSeconds()}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds}`
}
function Clock(props) {
    const [timeString, setTimeString] = useState('')

    useEffect(() => {
        const nowStringId = setTimeout(() => {

            const now = new Date();
            const nowString = formatDate(now)
            setTimeString(nowString)
        }, 1000)
        return () => {
            clearTimeout(nowStringId)
        }

    })
    return (
        <div>
            <h2>{timeString}</h2>
        </div>
    );
}

export default Clock;