import {useState} from 'react';
import './App.scss';
import Score from './Score';
import MainEasy from './MainEasy';

import { ReactComponent as Lizard } from './images/icon-lizard.svg';
import { ReactComponent as Spock } from './images/icon-spock.svg';
import { ReactComponent as Close } from './images/icon-close.svg';
import { ReactComponent as RulesBonus } from './images/image-rules-bonus.svg';
import { ReactComponent as Rules } from './images/image-rules.svg';
import { ReactComponent as Pentagon } from './images/bg-pentagon.svg';

function App() {

  const [score, setScore] = useState(0);

  return (
    <div className="App">

      <Score score={score}/>
      <MainEasy />

      
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
