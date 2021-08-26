import React from 'react'
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import { createStage } from '../../gameHelpers'
import { StyledGame } from './Styles/StyledGame'

export default function Game() {
    return (
        <StyledGame>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="score" />
                    <Display text="leaderboard" />
                </div>
                <StartButton />
            </aside>
        </StyledGame>
    )
}
