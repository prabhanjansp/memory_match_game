import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const uniqueCards = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊'];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function Game() {
  const [cards, setCards] = useState(() => shuffle([...uniqueCards, ...uniqueCards]));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setMatched([...matched, cards[first]]);
      }
      setTimeout(() => setFlipped([]), 1000);
      setMoves(moves + 1);
    }
  }, [flipped]);

  useEffect(() => {
    if (matched.length === uniqueCards.length) {
      clearInterval(timerRef.current);
      // Navigate to results or show modal
      alert(`You won in ${moves} moves and ${time} seconds!`);
      navigate('/');
    }
  }, [matched]);

  const handleCardClick = (index) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(cards[index])) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 120px)', gap: '15px', justifyContent: 'center' }}>
      {cards.map((content, index) => (
        <Card
          key={index}
          card={{ content }}
          isFlipped={flipped.includes(index) || matched.includes(content)}
          onClick={() => handleCardClick(index)}
        />
      ))}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>Moves: {moves}</p>
        <p>Time: {time}s</p>
      </div>
    </div>
  );
}
