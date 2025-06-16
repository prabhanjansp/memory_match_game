import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Memory Match Game</h1>
      <button
        onClick={() => navigate('/game')}
        style={{
          padding: '10px 20px',
          fontSize: '1.2rem',
          borderRadius: '8px',
          background: 'linear-gradient(45deg, #f3ec78, #af4261)',
          border: 'none',
          cursor: 'pointer',
          color: '#fff',
        }}
      >
        Start Game
      </button>
    </div>
  );
}
