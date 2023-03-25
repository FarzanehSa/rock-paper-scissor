import './MainEasy.scss';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Triangle } from './images/bg-triangle.svg';

function MainEasy() {
  return (
    <div className="easy-main">
      <div className='back'>

        <Triangle className='triangle' />
        <div className='key-paper'>
          <Paper/>
        </div>
        <div className='key-scissors'>
          <Scissors/>
        </div>
        <div className='key-rock'>
          <Rock />
        </div>
        
        
      </div>
    </div>
  );
}

export default MainEasy;