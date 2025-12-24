'use client';
import { useState, useEffect } from 'react';
import { MessageCircle, ShoppingBag, Wine, Zap } from 'lucide-react';

export default function MarketplaceDual() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* FAIXA ADS 2CM (MONETIZAÇÃO) */}
      <div style={{ height: '70px', background: '#ceae00', color: '#000', display: 'flex', alignItems: 'center', fontWeight: '900', overflow: 'hidden' }}>
        <marquee>🔥 BR EXPRESS ADS: ANÚNCIOS DAS MARCAS 24H RODANDO...</marquee>
      </div>

      <main style={{ padding: '20px' }}>
        <h2 style={{ color: '#ceae00' }}>VITRINE DE ABASTECIMENTO</h2>
        <p style={{ fontSize: '12px', color: '#888' }}>Ideal para sua feira, escolha com calma os melhores itens.</p>
        
        {/* SIMULAÇÃO DE VITRINE DETALHADA */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
          <div style={cardProduto}><Wine size={40} color="#ceae00" /><br/>Vinhos</div>
          <div style={cardProduto}><ShoppingBag size={40} color="#ceae00" /><br/>Feira Semanal</div>
        </div>
      </main>

      {/* 🟢 BOTÃO FLUTUANTE WHATSAPP IA (URGÊNCIA) */}
      <a 
        href="https://wa.me/SEUNUMERO" 
        style={{
          position: 'fixed', bottom: '20px', right: '20px', 
          background: '#25D366', color: '#fff', padding: '15px', 
          borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '10px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.5)', textDecoration: 'none', zIndex: 1000
        }}
      >
        <Zap size={20} fill="#fff" />
        <span style={{ fontWeight: 'bold' }}>COMPRA RÁPIDA (IA)</span>
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

const cardProduto = { background: '#111', height: '150px', borderRadius: '15px', border: '1px solid #222', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '14px' };
