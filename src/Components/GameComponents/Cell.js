import React from 'react'
import { StyledCell } from './Styles/StyledCell'
import { OBSTACLE_SPRITES } from '../../ObstacleSprites'

export default function Cell({ type }) {
    return (
        <StyledCell type={'o'} color={OBSTACLE_SPRITES['o'].color}>cell</StyledCell>
    )
}
