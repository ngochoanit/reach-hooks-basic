import React from 'react';
import PropTypes from 'prop-types';
import useClock from '../../Hooks/useClock';
import './BetterClock.scss'

BetterClock.propTypes = {

};

function BetterClock(props) {
    const timeString = useClock()
    return (
        <div className='betterClock'>
            <h1 className='betterClock-label'>{timeString}</h1>
        </div>
    );
}

export default BetterClock;