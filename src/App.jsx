import {useState} from 'react';
import Modal from 'react-modal';
import './App.scss';
import Score from './Score';
import MainEasy from './MainEasy';
import ResultEasy from './ResultEasy';
import RulesEasy from './RulesEasy';

import { ReactComponent as Lizard } from './images/icon-lizard.svg';
import { ReactComponent as Spock } from './images/icon-spock.svg';
import { ReactComponent as Close } from './images/icon-close.svg';
import { ReactComponent as RulesBonus } from './images/image-rules-bonus.svg';
import { ReactComponent as Rules } from './images/image-rules.svg';
import { ReactComponent as Pentagon } from './images/bg-pentagon.svg';

function App() {

  const [score, setScore] = useState(0);
  const [user, setUser] = useState(null);
  const [openR, setOpenR] = useState(false);
  console.log(openR);

  const closeModal = () => {
    setOpenR(false);
  }

  return (
    <div className="App">

      <Modal
        isOpen={openR}
        onRequestClose={closeModal}
        appElement={document.getElementById('root')}
        className="modal"
        shouldCloseOnOverlayClick={false}
      >
        {openR && <RulesEasy  onClose={closeModal} />}
      </Modal>

      <Score score={score}/>
      {!user ?
      <MainEasy user={user} setUser={setUser}/> :
      <ResultEasy user={user} setUser={setUser} setScore={setScore}/>
      }
      <button onClick={() => {setOpenR(true)}} className='btn-rules'>RULES</button>
      

      
      {/* <Scissors /> */}
      {/* <Lizard /> */}
      {/* <RulesBonus /> */}
      {/* <Rules /> */}
      {/* <Close /> */}
      {/* <Pentagon /> */}

    </div>
  );
}

export default App;
