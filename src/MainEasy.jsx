import {useState} from 'react';
import './MainEasy.scss';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Triangle } from './images/bg-triangle.svg';

function MainEasy() {

  const [user, setUser] = useState(null);
  console.log(user);

  const handleClickPaper = () => {
    setUser('p');
  } 
  const handleClickScissors = () => {
    setUser('s');
  } 
  const handleClickRock = () => {
    setUser('r');
  } 

  return (
    <div className="easy-main">
      <div className='back'>

        <Triangle className='triangle' />
        <div className="paper-container">
          <div className='key-paper' onClick={() => handleClickPaper()}>
            <Paper/>
          </div>
        </div>
        <div className="scissors-container">
          <div className='key-scissors' onClick={() => handleClickScissors()}>
            <Scissors/>
          </div>
        </div>
        <div className="rock-container">
          <div className='key-rock' onClick={() => handleClickRock()}>
            <Rock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainEasy;