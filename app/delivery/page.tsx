'use client';
import { useState, useEffect, useMemo } from 'react';
import { calcularTudo } from '../../lib/engine';
import { Star, Truck, ShieldCheck, MapPin } from 'lucide-react';

export default function MarketplaceSoberano() {
  const [ponteiro, setPonteiro] = useState(0);
  const marcas = useMemo(() => Array.from({ length: 100 }, (_, i) => ({ n: i === 0 ? "Coca-Cola" : `Marca ${i+1}` })), []);
  const dados = calcularTudo(7, 100); // Exemplo: 7km, R$ 100 em produtos

  useEffect(() => {
    const t = setInterval(() => setPonteiro(p => (p + 1) % 400), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* FAIXA ADS 2CM */}
      <div style={{ height: '75px', background: '#ceae00', color: '#000', position: 'sticky', top: 0, zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
        <marquee scrollamount="10" style={{ fontWeight: '900' }}>
          🔥 {marcas[Math.floor(ponteiro/4)].n.toUpperCase()} - OFERTA EXCLUSIVA | CARD {(ponteiro%4)+1}/4
        </marquee>
        <div style={{ position: 'absolute', bottom: '2px', right: '5px', fontSize: '10px', background: '#000', color: '#ceae00', padding: '2px 5px', fontWeight: 'bold' }}>
          BR DELIVERY EXPRESS ®
        </div>
      </div>

      <main style={{ padding: '20px' }}>
        <div style={{ background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #222' }}>
          <h2 style={{ color: '#ceae00' }}>RESUMO DA COMPRA</h2>
          <p>Produtos: R$ 100,00</p>
          <p style={{ color: '#0f0' }}>Frete (7km): R$ {dados.frete.toFixed(2)}</p>
          <hr style={{ borderColor: '#333' }} />
          <h3>TOTAL: R$ {dados.totalCliente.toFixed(2)}</h3>
          <button style={{ width: '100%', padding: '15px', background: '#ceae00', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>PAGAR AGORA</button>
        </div>

        {/* ÁREA DE AVALIAÇÃO */}
        <div style={{ marginTop: '20px', padding: '15px', background: '#0a0a0a', borderRadius: '10px', border: '1px solid #333' }}>
          <small>AVALIE SUA ENTREGA:</small>
          <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>{[1,2,3,4,5].map(i => <Star key={i} size={16} color="#ceae00" />)}</div>
        </div>
      </main>
    </div>
  );
}
