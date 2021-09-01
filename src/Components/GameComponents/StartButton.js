import React from 'react'
import { StyledStartButton } from './Styles/StyledStart'

export default function StartButton(props) {

    const handleClick = () => {
        props.setTrigger(true)
        props.setGameOver(false)
    }

    const endGame = () => {
        props.setGameOver(!props.gameOver)
        props.setTrigger(false)
    }

    return (props.trigger) ? (
        <>
        <StyledStartButton onClick={endGame}>End Game</StyledStartButton>
        </>

    ) :(
        <StyledStartButton onClick={handleClick}>Start Game</StyledStartButton>
    )
}
