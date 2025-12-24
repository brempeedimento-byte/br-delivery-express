'use client';
import { useState } from 'react';
import { ShieldCheck, TrendingUp, Factory, Truck, Star, AlertTriangle } from 'lucide-react';

export default function TorreSuprema() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #ceae00', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#ceae00', fontSize: '1.2rem' }}>BR EXPRESS | COMANDO GERAL</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={cardFinanceiro}>
          <TrendingUp color="#0f0" />
          <small>LUCRO TORRE (HOJE)</small>
          <h2 style={{ color: '#0f0' }}>R$ 15.420</h2>
        </div>
        <div style={cardFinanceiro}>
          <ShieldCheck color="#ceae00" />
          <small>APROVAÇÕES</small>
          <h2>03 PENDENTES</h2>
        </div>
      </div>

      <h3 style={{ marginTop: '30px' }}>RELATÓRIOS DE PERFORMANCE</h3>
      <div style={{ background: '#111', padding: '15px', borderRadius: '12px', marginTop: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>ATACADÃO CENTRAL</span>
          <span style={{ color: '#ceae00' }}><Star size={12} fill="#ceae00"/> 4.8</span>
        </div>
        <div style={{ fontSize: '10px', color: '#888', marginTop: '5px' }}>Vendas: 1.240 | Reclamações: 0</div>
      </div>
    </div>
  );
}
const cardFinanceiro = { background: '#111', padding: '20px', borderRadius: '15px', borderLeft: '5px solid #ceae00' };
