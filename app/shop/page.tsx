'use client';
import { useState } from 'react';

export default function Marketplace() {
  const [cart, setCart] = useState(0);
  const produtos = [
    { id: 1, nome: 'Combo Almoço Mangabeira', preco: '25.00' },
    { id: 2, nome: 'Bebida Gelada 2L', preco: '10.00' }
  ];

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #0f0' }}>
        <h2 style={{ color: '#0f0' }}>BR DELIVERY</h2>
        <span>🛒 Carrinho: {cart}</span>
      </nav>
      <main style={{ padding: '20px' }}>
        <h3>🚀 Destaques em Mangabeira</h3>
        {produtos.map(p => (
          <div key={p.id} style={{ background: '#111', padding: '15px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #333' }}>
            <h4>{p.nome}</h4>
            <p>R$ {p.preco}</p>
            <button onClick={() => setCart(cart + 1)} style={{ background: '#0f0', border: 'none', padding: '10px', width: '100%', fontWeight: 'bold', cursor: 'pointer' }}>ADICIONAR AO PEDIDO</button>
          </div>
        ))}
        <button style={{ background: '#fff', color: '#000', width: '100%', padding: '15px', marginTop: '20px', fontWeight: 'bold' }}>FINALIZAR E PAGAR COM CARTÃO</button>
      </main>
    </div>
  );
}
