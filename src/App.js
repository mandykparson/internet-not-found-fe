import './App.css';
import GameTrigger from './Components/GameTrigger';
import LeaderBoard from './Components/LeaderBoard';
import { useState } from 'react'

function App() {

  const [ trigger, setTrigger ] = useState(false)
  return (
    <div className="App" className="container">
      <h1>Internet Not Found</h1>
      {(trigger) ? (
          <h1>The Game</h1>
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
