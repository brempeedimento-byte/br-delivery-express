'use client';
import { useState } from 'react';

export default function Marketplace() {
  const [cart, setCart] = useState([]);
  const produtos = [
    { id: 1, nome: 'Combo Almoço Mangabeira', preco: 25.00 },
    { id: 2, nome: 'Bebida Gelada 2L', preco: 10.00 }
  ];

  const total = cart.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #0f0', position: 'sticky', top: 0, background: '#000' }}>
        <h2 style={{ color: '#0f0', margin: 0 }}>BR DELIVERY</h2>
        <div style={{ background: '#0f0', color: '#000', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
          🛒 {cart.length} Itens
        </div>
      </nav>

      <main style={{ padding: '20px' }}>
        <h3 style={{ borderLeft: '4px solid #0f0', paddingLeft: '10px' }}>Cardápio Mangabeira</h3>
        {produtos.map(p => (
          <div key={p.id} style={{ background: '#111', padding: '15px', marginBottom: '15px', borderRadius: '12px', border: '1px solid #333' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>{p.nome}</h4>
            <p style={{ color: '#0f0', fontWeight: 'bold' }}>R$ {p.preco.toFixed(2)}</p>
            <button 
              onClick={() => setCart([...cart, p])}
              style={{ background: '#222', color: '#0f0', border: '1px solid #0f0', padding: '10px', width: '100%', borderRadius: '8px', cursor: 'pointer' }}
            >
              + ADICIONAR
            </button>
          </div>
        ))}

        {cart.length > 0 && (
          <div style={{ marginTop: '30px', padding: '20px', background: '#0f0', color: '#000', borderRadius: '12px', textAlign: 'center' }}>
            <h3>Total: R$ {total.toFixed(2)}</h3>
            <button 
              onClick={() => alert('Redirecionando para o Mercado Pago...')}
              style={{ background: '#000', color: '#fff', border: 'none', padding: '15px 30px', fontWeight: 'bold', borderRadius: '8px', width: '100%', fontSize: '16px' }}
            >
              PAGAR AGORA (CARTÃO/PIX)
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
