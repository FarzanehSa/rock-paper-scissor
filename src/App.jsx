import {useState} from 'react';
import './App.scss';
import Score from './Score';
import MainEasy from './MainEasy';
import ResultEasy from './ResultEasy';

import { ReactComponent as Lizard } from './images/icon-lizard.svg';
import { ReactComponent as Spock } from './images/icon-spock.svg';
import { ReactComponent as Close } from './images/icon-close.svg';
import { ReactComponent as RulesBonus } from './images/image-rules-bonus.svg';
import { ReactComponent as Rules } from './images/image-rules.svg';
import { ReactComponent as Pentagon } from './images/bg-pentagon.svg';

function App() {

  const [score, setScore] = useState(0);
  const [user, setUser] = useState(null);
  console.log(score);

  return (
    <div className="App">

      <Score score={score}/>
      {!user ?
      <MainEasy user={user} setUser={setUser}/> :
      <ResultEasy user={user} setUser={setUser} setScore={setScore}/>
      }
      

      
      {/* <Scissors /> */}
      {/* <Lizard /> */}
      {/* <RulesBonus /> */}
      {/* <Rules /> */}
      {/* <Close /> */}
      {/* <Pentagon /> */}

    </div>
  );
}

export default App;
