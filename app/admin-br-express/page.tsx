'use client';
import { ShieldCheck, TrendingUp, Truck, Factory, Star, MessageSquare } from 'lucide-react';

export default function TorreGeral() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <h1 style={{ color: '#ceae00', fontSize: '1.2rem', borderBottom: '1px solid #ceae00', paddingBottom: '10px' }}>BR EXPRESS | COMANDO GERAL</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
        <div style={cardF}><TrendingUp color="#0f0" /> <small>LUCRO TORRE</small><h3>R$ 15.420</h3></div>
        <div style={cardF}><MessageSquare color="#25D366" /> <small>PEDIDOS IA</small><h3>842</h3></div>
      </div>

      <h3 style={{ marginTop: '30px' }}>RELATÓRIO DE AUDITORIA</h3>
      <div style={{ background: '#111', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #ceae00' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <b>Atacadão Central</b>
          <span><Star size={12} fill="#ceae00" /> 4.9</span>
        </div>
        <small style={{ color: '#888' }}>Vendas: 450 | Reclamações: 0</small>
      </div>
    </div>
  );
}
const cardF = { background: '#111', padding: '15px', borderRadius: '15px', border: '1px solid #222' };
