import { useState, useRef, useEffect } from 'react'
import axios from 'axios';
import Input from './Input';
import History from './History';

const URL = 'http://localhost:4000'

function App() {
  const [moves, setMoves] = useState([]);

  const inputNameRef = useRef();

  useEffect(() => {
    const moves = JSON.parse(localStorage.getItem('chess.key'));
    if (moves.length !== 0) {
      setMoves(moves);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chess.key', JSON.stringify(moves));
  }, [moves])

  const handleClick = () => {
    const move = {
      player: "white",
      move: inputNameRef.current.value
    };

    axios.get(URL + "/isValid", {params: {move}}).then(res => {
      console.log(res.data);
    });

    setMoves(prev => {
      return [...prev, move];
    });

    inputNameRef.current.value = null;
  }

  const handleNewGame = () => {
    setMoves([]);
  }

  return (
    <>
      <Input refProp={inputNameRef} />
      <button onClick={handleClick}>enter</button>
      <button onClick={handleNewGame}>new game</button>
      <History moves={moves} />
    </>
  );
}

export default App;
