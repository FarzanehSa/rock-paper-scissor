import {useState, useEffect} from 'react';
import './ResultEasy.scss';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';

function ResultEasy({user}) {

  const [info, setInfo] = useState('');
  const [com, setCom] = useState(null);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(-1);

  

  useEffect(() => {
    if (user === 'r') {
      setInfo('rock-container')
    } else if (user === 'p') {
      setInfo('paper-container')
    } else if (user === 's') {
      setInfo('scissors-container')
    }
    setCom(Math.floor(Math.random() * 3) + 1);

    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  useEffect(() => {
    if (com === 1) { // house is rock 
      if (user === 'p') setResult(2); // user won
      else if (user === 's') setResult(1); // user lost
      else setResult(0); // even
    } else if (com === 2) { // house is paper
      if (user === 's') setResult(2); // user won
      else if (user === 'r') setResult(1); // user lost
      else setResult(0); // even
    } else if (com === 3) { // house is scissors
      if (user === 'r') setResult(2); // user won
      else if (user === 'p') setResult(1); // user lost
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
      <div>
        <span className='text'>{result}</span>
      </div>}
      <div className="computer-choose">
        <span className='text'>The House Picked</span>
        {com === 1 ?
        <div className='rock-container'>
          <div className='key'>
            <Rock />
          </div>
        </div>
        : com === 2 ?
          <div className='paper-container'>
            <div className='key'>
              <Paper />
            </div>
          </div>
          : com === 3 ?
          <div className='scissors-container'>
            <div className='key'>
              <Scissors />
            </div>
          </div> :
          <div className='com-container'>
        
          </div>
        }
      </div>
    </div>
  );
}

export default ResultEasy;