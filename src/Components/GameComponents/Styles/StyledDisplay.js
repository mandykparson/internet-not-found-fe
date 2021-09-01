import styled from 'styled-components'

export const StyledDisplay = styled.div`
    box-sixing: border-box;
    display: flex;
    align-items: center;
    min-height: 30px;
    width: 100%;
    color: ${props => (props.gameOver ? 'red' : 'blue')}
    background: #000;
`