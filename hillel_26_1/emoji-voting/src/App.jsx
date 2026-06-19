import { useState, useEffect } from 'react';
import './App.css';


const EMOJIS_DATA = [
  { id: 'grinning', char: '😃' },
  { id: 'smiling', char: '😊' },
  { id: 'cool', char: '😎' },
  { id: 'star', char: '🤩' },
  { id: 'heart', char: '😍' }
];

function App() {

  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem('emoji_votes');
    if (savedVotes) {
      return JSON.parse(savedVotes);
    }
   
    return { grinning: 0, smiling: 0, cool: 0, star: 0, heart: 0 };
  });


  const [winner, setWinner] = useState(null);


  useEffect(() => {
    localStorage.setItem('emoji_votes', JSON.stringify(votes));
  }, [votes]);

 
  const handleEmojiClick = (id) => {
    setVotes((prevVotes) => ({
      ...prevVotes,      
      [id]: prevVotes[id] + 1 
    }));
  };

 
  const handleShowResults = () => {
    let max = -1;
    let winnerId = null;
    let hasVotes = false;

  
    for (const key in votes) {
      if (votes[key] > 0) hasVotes = true; 
      
      if (votes[key] > max) {
        max = votes[key];
        winnerId = key;
      }
    }

    if (!hasVotes) {
      alert('Будь ласка, проголосуйте хоча б за один смайлик!');
      return;
    }

    
    const winnerData = EMOJIS_DATA.find(item => item.id === winnerId);

    
    setWinner({
      char: winnerData.char,
      count: max
    });
  };

  
  const handleClear = () => {
   
    setVotes({ grinning: 0, smiling: 0, cool: 0, star: 0, heart: 0 });

    localStorage.removeItem('emoji_votes');
    
    setWinner(null);
  };

  return (
    <div className="voting-container">
      <h1 className="title">Голосування за найкращий смайлик</h1>

      {}
      <div className="emoji-list">
        {EMOJIS_DATA.map((emoji) => (
          <div 
            key={emoji.id} 
            className="emoji-card" 
            onClick={() => handleEmojiClick(emoji.id)}
          >
            <span className="emoji-symbol">{emoji.char}</span>
            <span className="emoji-count">{votes[emoji.id]}</span>
          </div>
        ))}
      </div>

      {}
      <div className="button-group">
        <button className="btn btn-success" onClick={handleShowResults}>
          Показати Результат
        </button>
        <button className="btn btn-danger" onClick={handleClear}>
          Очистити Результати
        </button>
      </div>

      {}
      {winner && (
        <div className="results-block">
          <h2>Результати голосування:</h2>
          <p><em>Переможець:</em></p>
          <div className="winner-emoji">{winner.char}</div>
          <p>Кількість голосів: <strong>{winner.count}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;