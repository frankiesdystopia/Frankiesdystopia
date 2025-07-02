import React from 'react'

export default function App() {
  const gates = [
    { name: 'Art', tag: 'spray-art-tag.png' },
    { name: 'Gaming', tag: 'spray-gaming-tag.png' },
    { name: 'Fashion', tag: 'spray-fashion-tag.png' },
    { name: 'Game Design', tag: 'spray-dev-tag.png' },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Frankie Dystopia // Terminal Root</h1>
      <p>Welcome, scavenger. Choose your gate:</p>
      {gates.map((gate) => (
        <div key={gate.name} className="gate">
          <img src={gate.tag} alt={gate.name} style={{ height: '40px', opacity: 0.6 }} />
          <h2>{gate.name}</h2>
        </div>
      ))}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <img src="/frankie-avatar.png" alt="Frankie" style={{ width: '100px', borderRadius: '50%', border: '2px solid #555' }} />
      </div>
    </div>
  );
}
