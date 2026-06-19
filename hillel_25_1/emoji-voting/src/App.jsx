import { useState, useEffect } from 'react';
import './App.css';


const initialEmojis = [
  { id: 'grinning', char: '😃' },
  { id: 'smiling', char: '😊' },
  { id: 'cool', char: '😎' },
  { id: 'star', char: '🤩' },
  { id: 'heart', char: '😍' }
];

function App() {

  const [votes, setVotes] = useState(() => {
    const savedVotes = localStorage.getItem('emojiVotes');
    return savedVotes ? JSON.parse(savedVotes) : {
      grinning: 0,
      smiling: 0,
      cool: 0,
      star: 0,
      heart: 0
    };
  });


  const [winner, setWinner] = useState(null);


  useEffect(() => {
    localStorage.setItem('emojiVotes', JSON.stringify(votes));
  }, [votes]);


  const handleVote = (id) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [id]: prevVotes[id] + 1
    }));
  };


  const showResults = () => {
    let maxVotes = -1;
    let winnerId = null;
    let totalVotes = 0;

  
    for (const id in votes) {
      totalVotes += votes[id];
      if (votes[id] > maxVotes) {
        maxVotes = votes[id];
        winnerId = id;
      }
    }

  
    if (totalVotes === 0) {
      alert("Голосів ще немає! Будь ласка, проголосуйте.");
      return;
    }

 
    const winnerEmoji = initialEmojis.find(e => e.id === winnerId);

    setWinner({
      char: winnerEmoji.char,
      count: maxVotes
    });
  };

 
  const clearResults = () => {
   
    setVotes({
      grinning: 0,
      smiling: 0,
      cool: 0,
      star: 0,
      heart: 0
    });
 
    setWinner(null);
  };

  return (
    <div class="container">
      <h2>Голосування за найкращий смайлик</h2>

      {/* Список смайликів */}
      <div class="emojis-container">
        {initialEmojis.map((emoji) => (
          <div 
            key={emoji.id} 
            class="emoji-item" 
            onClick={() => handleVote(emoji.id)}
          >
            <span class="emoji">{emoji.char}</span>
            <span class="count">{votes[emoji.id]}</span>
          </div>
        ))}
      </div>

      {/* Кнопки дій */}
      <div class="buttons-group">
        <button class="btn btn-success" onClick={showResults}>
          Show Results
        </button>
        <button class="btn btn-danger" onClick={clearResults}>
          Очистити результати
        </button>
      </div>

      {}
      {winner && (
        <div class="results-section">
          <h3>Результати голосування:</h3>
          <p class="winner-title">Переможець:</p>
          <div class="winner-emoji">{winner.char}</div>
          <p>Кількість голосів: <strong>{winner.count}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;