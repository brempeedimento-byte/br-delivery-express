'use client';
import { useState } from 'react';

export default function DeliveryDropshipping() {
  const [cart, setCart] = useState(0);
  const produtos = [
    { id: 1, n: 'Produto VIP Express', p: '199,90', icon: '📦' },
    { id: 2, n: 'Kit Sócio Dropshipping', p: '450,00', icon: '💎' }
  ];

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ceae00', display: 'flex', justifyContent: 'space-between', background: '#0a0a0a' }}>
        <span style={{ color: '#ceae00', fontWeight: 'bold' }}>BR SHOPPING</span>
        <span>🛒 {cart}</span>
      </nav>
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '1.2rem' }}>Vitrine Web Integrada</h2>
        {produtos.map(p => (
          <div key={p.id} style={{ background: '#111', margin: '15px 0', padding: '20px', borderRadius: '10px', border: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <span style={{ fontSize: '30px' }}>{p.icon}</span>
             <div style={{ flex: 1, marginLeft: '15px' }}>
                <div style={{ fontWeight: 'bold' }}>{p.n}</div>
                <div style={{ color: '#ceae00' }}>R$ {p.p}</div>
             </div>
             <button onClick={() => setCart(cart + 1)} style={{ background: '#ceae00', border: 'none', padding: '10px', borderRadius: '5px', fontWeight: 'bold' }}>COMPRAR</button>
          </div>
        ))}
        {cart > 0 && <button style={{ width: '100%', padding: '20px', background: '#ceae00', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '8px', marginTop: '20px' }}>FINALIZAR PEDIDO (CHECKOUT WEB)</button>}
      </div>
      <a href="/" style={{ display: 'block', textAlign: 'center', color: '#555', marginTop: '20px', textDecoration: 'none' }}>← Voltar ao Portal</a>
    </div>
  );
}
