import React from 'react'

export default function Leader({player}) {
    return (
        <div className="row">
            <h2>{player.name}</h2>
            <h2>{player.score}</h2>
        </div>
    )
}
