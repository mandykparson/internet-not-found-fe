import React from 'react'
import { useState, useEffect } from 'react'
import Leader from './Leader'

export default function LeaderBoard() {

    const [ players, setPlayers ] = useState('')
    const [ playersURL ] = useState('https://internet-not-found-be.herokuapp.com/players')

    useEffect(() => {
        fetch(playersURL)
        .then(response => response.json())
        .then(playersApi => setPlayers(playersApi))
    })

    const renderLeaders = () => {
        try {
            return players.map(player => {
                return <Leader key={player.id} player={player} />
            })
        } catch (error) {
        console.error(error);
        }
    }

    return (
        <div className="container" className="leaderboard">
            <h2 className="row">LEADERBOARD</h2>
            { renderLeaders() }
        </div>
    )
}
