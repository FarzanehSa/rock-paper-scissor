import {useState, useEffect} from 'react';
import './ResultEasy.scss';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';

function ResultEasy({user, setUser}) {

  const [info, setInfo] = useState('');
  const [com, setCom] = useState(null);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(-1);

  const handleClick = () => {
    setShow(false);
    setResult(null);
    setCom(null);
    setUser(null);
  }

  useEffect(() => {
    if (user === 'r') {
      setInfo('container rock-container')
    } else if (user === 'p') {
      setInfo('container paper-container')
    } else if (user === 's') {
      setInfo('container scissors-container')
    }
    setCom(Math.floor(Math.random() * 3) + 1);

    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  useEffect(() => {
    if (com === 1) { // house is rock 
      if (user === 'p') setResult(1); // user won
      else if (user === 's') setResult(-1); // user lost
      else setResult(0); // even
    } else if (com === 2) { // house is paper
      if (user === 's') setResult(1); // user won
      else if (user === 'r') setResult(-1); // user lost
      else setResult(0); // even
    } else if (com === 3) { // house is scissors
      if (user === 'r') setResult(1); // user won
      else if (user === 'p') setResult(-1); // user lost
      else setResult(0); // even
    } 
  }, [com])

  
  return (
    <div className="result-main">
      <div className='user-choose'>
        <span className='text'>You Picked</span>
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
      {show && 
      <div className='result-part'>
        {result === 0 ? 
          <span className='text result-text'>EVEN</span> :
          result === -1 ?
          <span className='text result-text'>YOU LOSE</span> :
          <span className='text result-text'>YOU WIN</span>
        }
        <button onClick={handleClick}>PLAY AGAIN</button>
      </div>}
      <div className="computer-choose">
        <span className='text'>The House Picked</span>
        {com === 1 ?
        <div className='container rock-container'>
          <div className='key'>
            <Rock />
          </div>
        </div>
        : com === 2 ?
          <div className='container paper-container'>
            <div className='key'>
              <Paper />
            </div>
          </div>
          : com === 3 ?
          <div className='container scissors-container'>
            <div className='key'>
              <Scissors />
            </div>
          </div> :
          <div className='container com-container'>
        
          </div>
        }
      </div>
    </div>
  );
}

export default ResultEasy;