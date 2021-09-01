import { useState } from 'react' 

import { randomObstacleSprite } from '../ObstacleSprites'

export const usePlayer = () => {
    const [ object, setObject ] = useState({
        pos: { x: 0, y: 0},
        obstacle: randomObstacleSprite().shape,
        collided: false
    })

    return [object];
}