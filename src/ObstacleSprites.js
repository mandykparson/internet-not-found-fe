export const OBSTACLE_SPRITES = {
    0: { shape: [[0]], color: '0, 0, 0' },
    o: { 
        shape: [
                    ['o', 'o'],
                    ['o', 'o']
                ], 
        color: '0,0,0'},
    n: { 
        shape: [
                    ['n', 'n'],
                    ['n', 'n'],
                    ['n', 'n'],
                    ['n', 'n']
                ], 
        color: '0,0,0'},
    m: { 
        shape: [
                ['m', 'm', 'm', 'm'],
                ['m', 'm', 'm', 'm'],
                ['m', 'm', 'm', 'm'],
                ['m', 'm', 'm', 'm']
                ], 
        color: '0,0,0'},
}

export const randomObstacleSprite = () => {
    const obstacles = 'onm';
    const randObstacle = 
        obstacles[Math.floor(Math.random() * obstacles.length)]
    return OBSTACLE_SPRITES[randObstacle]
}