import './RulesEasy.scss';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as RulesImage } from './images/image-rules.svg';

const RulesEasy = ({onClose}) => {

  return (
    <div className="rules-easy-page">
      <span className='title'>RULES</span>
      <button className='btn-close' onClick={onClose}>X</button>
      <div className='container'>
        <RulesImage />
      </div>
      
    </div>
  )
}

export default RulesEasy;