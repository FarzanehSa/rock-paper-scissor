import './App.scss';
import Score from './Score';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Lizard } from './images/icon-lizard.svg';
import { ReactComponent as Spock } from './images/icon-spock.svg';
import { ReactComponent as Close } from './images/icon-close.svg';
import { ReactComponent as RulesBonus } from './images/image-rules-bonus.svg';
import { ReactComponent as Rules } from './images/image-rules.svg';
import { ReactComponent as Triangle } from './images/bg-triangle.svg';
import { ReactComponent as Pentagon } from './images/bg-pentagon.svg';

function App() {
  return (
    <div className="App">

      <Score />
      
      <Paper />
      <Rock />
      <Scissors />
      <Lizard />
      <Spock />
      <RulesBonus />
      <Rules />
      <Close />
      <Triangle />
      <Pentagon />

    </div>
  );
}

export default App;
