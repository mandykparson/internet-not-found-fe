import './App.css';
import GameTrigger from './Components/GameTrigger';
import LeaderBoard from './Components/LeaderBoard';
import { useState } from 'react'
import Game from './Components/GameComponents/Game'

function App() {

  const [ trigger, setTrigger ] = useState(false)
  return (
    <div className="App" className="container">
      <h1>Internet Not Found</h1>
      {(trigger) ? (
          <Game />
        ) : (
          <div>
            <LeaderBoard />
            <GameTrigger trigger={trigger} setTrigger={setTrigger}/>
          </div>
        )
      }
    </div>
  );
}

export default App;
