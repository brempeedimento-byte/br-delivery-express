'use client';
import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, Zap, Wine, ShoppingBag } from 'lucide-react';

export default function MarketplaceCompleto() {
  const [ponteiro, setPonteiro] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPonteiro(p => (p + 1) % 400), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* MONETIZAÇÃO ADS 2CM */}
      <div style={{ height: '75px', background: '#ceae00', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <marquee style={{ fontWeight: '900' }}> 🔥 BR EXPRESS ADS: MARCA ${Math.floor(ponteiro/4) + 1} - OFERTA DO DIA | CARD ${(ponteiro%4)+1}/4 </marquee>
        <div style={{ position: 'absolute', bottom: '2px', right: '5px', fontSize: '10px', background: '#000', color: '#ceae00', padding: '2px 5px', fontWeight: 'bold' }}>BR DELIVERY EXPRESS ®</div>
      </div>

      <main style={{ padding: '20px' }}>
        <h2 style={{ color: '#ceae00' }}>VITRINE DE ABASTECIMENTO</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
           <div style={cardP}><Wine color="#ceae00" /> Vinhos</div>
           <div style={cardP}><ShoppingBag color="#ceae00" /> Feira Semanal</div>
        </div>

        {/* FEEDBACK DO CLIENTE */}
        <div style={{ marginTop: '30px', padding: '15px', background: '#111', borderRadius: '15px', border: '1px solid #333' }}>
          <small>AVALIE SUA ÚLTIMA ENTREGA:</small>
          <div style={{ display: 'flex', gap: '5px', marginTop: '10px' }}>{[1,2,3,4,5].map(i => <Star key={i} size={18} color="#ceae00" />)}</div>
        </div>
      </main>

      {/* BOTÃO WHATSAPP IA (URGÊNCIA) */}
      <a href="#" style={btnZap}>
        <Zap size={20} fill="#fff" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '10px' }}>ESTÁ COM PRESSA?</span>
          <span style={{ fontWeight: 'bold' }}>PEDIDO VIA WHATSAPP (IA)</span>
        </div>
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
const cardP = { background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #222', textAlign: 'center' };
const btnZap = { position: 'fixed', bottom: '20px', right: '20px', background: '#25D366', color: '#fff', padding: '12px 20px', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.4)', zIndex: 1000 };
