import {useState, useEffect} from 'react';
import './ResultEasy.scss';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';

function ResultEasy({user, setUser, setScore}) {

  const [info, setInfo] = useState('');
  const [com, setCom] = useState(null);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(0);
  const [userCyDiv, setUserCyDiv] = useState("div-u-3");
  const [comCyDiv, setComCyDiv] = useState("div-u-3");
  const [css, setCss] = useState('result-main')

  const handleClick = () => {
    setShow(false);
    setResult(0);
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
      setCss('result-main test');
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  useEffect(() => {
    if (com === 1) { // house is rock 
      if (user === 'p') setResult(pre => 1); // user won
      else if (user === 's') setResult(pre => -1); // user lost
      else setResult(pre => 0); // even
    } else if (com === 2) { // house is paper
      if (user === 's') setResult(pre => 1); // user won
      else if (user === 'r') setResult(pre => -1); // user lost
      else setResult(pre => 0); // even
    } else if (com === 3) { // house is scissors
      if (user === 'r') setResult(pre => 1); // user won
      else if (user === 'p') setResult(pre => -1); // user lost
      else setResult(pre => 0); // even
    }
  }, [com]);

  useEffect(() => {
    console.log('r: ',result);

    const timeoutId = setTimeout(() => {
      setScore(pre => pre + result);
    }, 1500);

    
    if (result === 1) {
      setUserCyDiv("div-u-3 div-u-3-show")
    }
    if (result === -1) {
      setComCyDiv("div-u-3 div-u-3-show")
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [result]);

  console.log(css);

  return (
    <div className={css}>
      <div className='user-choose'>
        <span className='text you-picked'>You Picked</span>
        {show &&
        <div className={userCyDiv}>
          <div className='div-u-2'>
            <div className='div-u-1'>
            </div>
          </div>
        </div>
        }
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
        <button className='btn-play' onClick={handleClick}>PLAY AGAIN</button>
      </div>}
      <div className="computer-choose">
        <span className='text com-picked'>The House Picked</span>
        {show &&
        <div className={comCyDiv}>
          <div className='div-u-2'>
            <div className='div-u-1'>
            </div>
          </div>
        </div>
        }
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