import './App.css';
import GameTrigger from './Components/GameTrigger';
import LeaderBoard from './Components/LeaderBoard';
import { useState } from 'react'
import Game from './Components/GameComponents/Game'

function App() {

  const [ trigger, setTrigger ] = useState(false)

  return (
    <div className="container">
      <h1>Internet Not Found</h1>
      <p className="row">Welcome! My name is Mandy Parson and this is my basic video game app. It was inspired by my frustrationing home internet and having to be subjected to Google Chrome's T-Rex Runner game over and over again. I created the backend leaderboard with Ruby on Rails and the frontend with React. Enjoy!</p>
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
