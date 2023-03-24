import { ReactComponent as LogoBonus } from './images/logo-bonus.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import './Score.scss';

function Score() {
  return (
    <div className="score">
      <LogoBonus />
      <Logo />
    </div>
  );
}

export default Score;