import {useState, useEffect} from 'react';
import './ResultEasy.scss';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';

function ResultEasy({user}) {

  const [info, setInfo] = useState('');
  useEffect(() => {
    if (user === 'r') {
      setInfo('rock-container')
    } else if (user === 'p') {
      setInfo('paper-container')
    } else if (user === 's') {
      setInfo('scissors-container')
    }
  }, [])

  
  return (
    <div className="result-main">
      {user === 'r' ?
      <div className={info}>
        <div className='key'>
          <Rock />
        </div>
      </div>
      : user === 'p' ?
        <div className={info}>
          <div className='key'>
            <Paper />
          </div>
        </div>
        :
        <div className={info}>
          <div className='key'>
            <Scissors />
          </div>
        </div>
      }
    </div>
  );
}

export default ResultEasy;