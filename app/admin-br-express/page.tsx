'use client';
import { useState } from 'react';
import { MessageSquare, Mic, Cpu, CheckCircle } from 'lucide-react';

export default function TorreWhatsAppIA() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <header style={{ borderBottom: '2px solid #ceae00', paddingBottom: '15px' }}>
        <h1 style={{ color: '#ceae00', fontSize: '1.2rem' }}>BR EXPRESS | CONTROLE DE IA</h1>
      </header>

      {/* STATUS DO ROBÔ NO WHATSAPP */}
      <div style={{ background: '#111', padding: '20px', borderRadius: '15px', marginTop: '20px', border: '1px solid #ceae00' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Cpu color="#0f0" className="animate-pulse" />
          <h3 style={{ margin: 0 }}>ROBÔ CONVERSACIONAL ATIVO</h3>
        </div>
        <p style={{ fontSize: '12px', color: '#888' }}>Interpretando Áudios e Pedidos via API WhatsApp</p>
      </div>

      <h3 style={{ marginTop: '30px' }}>ÚLTIMAS INTERAÇÕES DO ROBÔ</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {[1, 2].map(i => (
          <div key={i} style={{ background: '#111', padding: '15px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span style={{ color: '#ceae00' }}><Mic size={14}/> Áudio Interpretado</span>
              <span style={{ color: '#555' }}>há 2 min</span>
            </div>
            <p style={{ fontSize: '14px', margin: '10px 0' }}>"Quero 2 fardos de água e 1 carvão..."</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#0f0', fontSize: '11px' }}>
              <CheckCircle size={12} /> Carrinho gerado: R$ 42,00 + Frete
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
