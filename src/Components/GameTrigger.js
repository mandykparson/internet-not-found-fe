import React from 'react'

export default function GameTrigger(props) {
    return (
        <div className="container">
            <button onClick={() => props.setTrigger(!props.trigger)}>START</button>
        </div>
    )
}
