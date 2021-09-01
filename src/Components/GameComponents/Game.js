import React from 'react'
import { useState } from 'react' 
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import { usePlayer } from '../../Hooks/usePlayer'
import { useStage } from '../../Hooks/useStage'
import { StyledGame } from './Styles/StyledGame'
import { createStage } from '../../gameHelpers'

export default function Game() {
    const [ slideTime, setSlideTime ] = useState(null)
    const [ gameOver, setGameOver ] = useState(false)
    const [ trigger, setTrigger ] = useState(false)
    const [ endTrigger, setEndTrigger ] = useState(false)

    const [object] = usePlayer();
    const [stage, setStage] = useStage(object)

    console.log('re-render')

    const moveObject = (dir) => {

    }

    const startGame = () => {

    }

    const slide = () => {

    }

    const slideObject = () => {

    }

    const move = ({ keyCode }) => {

    }

    return (
        <StyledGame>
            <Stage stage={stage}/>
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over"/>
                ) : (
                <div>
                    <Display text="score" />
                    <Display text="00000" />
                </div>)}
                <StartButton 
                    trigger={trigger} 
                    setTrigger={setTrigger} 
                    gameOver={gameOver} 
                    setGameOver={setGameOver}
                    endTrigger={endTrigger}
                    setEndTrigger={setEndTrigger}/>
            </aside>
        </StyledGame>
    )
}
