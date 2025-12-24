'use client';
import { useState } from 'react';
import { ShoppingCart, Search } from 'lucide-react';

export default function Marketplace() {
  const [cat, setCat] = useState('Hortifruti');
  const [cart, setCart] = useState([]);

  const prateleiras = {
    'Hortifruti': [
      { id: 1, n: 'Banana Prata', p: '7.50', ref: 'Fazenda BR', img: '🍌' },
      { id: 2, n: 'Tomate Italiano', p: '9.20', ref: 'Orgânico VIP', img: '🍅' },
      { id: 3, n: 'Alface Crespa', p: '3.50', ref: 'Hidropônica', img: '🥬' }
    ],
    'Mercearia': [
      { id: 4, n: 'Arroz Branco 5kg', p: '28.90', ref: 'Marca Prata', img: '🌾' },
      { id: 5, n: 'Arroz Integral 5kg', p: '32.00', ref: 'Marca Ouro', img: '🌾' },
      { id: 6, n: 'Feijão Carioca 1kg', p: '8.40', ref: 'Kicaldo', img: '🫘' }
    ],
    'Bebidas': [
      { id: 7, n: 'Água 500ml', p: '2.50', ref: 'Indaiá', img: '💧' },
      { id: 8, n: 'Suco de Laranja 1L', p: '12.00', ref: 'Natural BR', img: '🍊' }
    ]
  };

  const add = (item) => setCart([...cart, item]);
  const total = cart.reduce((acc, i) => acc + parseFloat(i.p), 0).toFixed(2);

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', color: '#000', fontFamily: 'sans-serif' }}>
      <header style={{ background: '#000', color: '#ceae00', padding: '15px', position: 'sticky', top: 0, zIndex: 10, display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>BR DELIVERY</h2>
        <div style={{ fontWeight: 'bold' }}>🛒 R$ {total}</div>
      </header>

      <div style={{ display: 'flex', overflowX: 'auto', background: '#fff', padding: '10px', gap: '10px' }}>
        {Object.keys(prateleiras).map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ padding: '8px 20px', borderRadius: '20px', border: cat === c ? 'none' : '1px solid #ddd', background: cat === c ? '#ceae00' : '#fff', fontWeight: 'bold' }}>{c}</button>
        ))}
      </div>

      <main style={{ padding: '15px' }}>
        <h3>{cat}</h3>
        {prateleiras[cat].map(p => (
          <div key={p.id} style={{ background: '#fff', padding: '15px', borderRadius: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', border: '1px solid #eee' }}>
            <span style={{ fontSize: '30px' }}>{p.img}</span>
            <div style={{ flex: 1, marginLeft: '15px' }}>
              <div style={{ fontWeight: 'bold' }}>{p.n}</div>
              <div style={{ fontSize: '0.8rem', color: '#888' }}>{p.ref}</div>
              <div style={{ color: '#ceae00', fontWeight: 'bold' }}>R$ {p.p}</div>
            </div>
            <button onClick={() => add(p)} style={{ background: '#000', color: '#ceae00', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontWeight: 'bold' }}>+</button>
          </div>
        ))}
      </main>

      {cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 20, width: '90%', left: '5%', background: '#000', padding: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
          <span>Total: R$ {total}</span>
          <button style={{ background: '#ceae00', border: 'none', padding: '5px 15px', fontWeight: 'bold', borderRadius: '5px' }}>FINALIZAR</button>
        </div>
      )}
    </div>
  );
}
