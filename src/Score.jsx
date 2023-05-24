// import { ReactComponent as LogoBonus } from './images/logo-bonus.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import './Score.scss';

function Score({score}) {
  return (
    <div className="score-main">
      {/* <LogoBonus /> */}
      <div className='score-container'>
        <Logo className="logo"/>
        <div className='point'>
          <span>Score</span>
          <span>{score}</span>
        </div>
      </div>
    </div>
  );
}

export default Score;