'use client';
import { BarChart, MessageSquare, Globe, TrendingUp } from 'lucide-react';

export default function TorreVendasDual() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <h1 style={{ color: '#ceae00' }}>BR EXPRESS | CANAIS DE VENDA</h1>
      
      <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
        <div style={cardCanal}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><Globe size={18} color="#ceae00"/> Vendas Web (Feira)</span>
            <b style={{ color: '#ceae00' }}>65%</b>
          </div>
          <div style={{ background: '#222', height: '8px', borderRadius: '10px', marginTop: '10px' }}>
            <div style={{ background: '#ceae00', width: '65%', height: '100%', borderRadius: '10px' }}></div>
          </div>
        </div>

        <div style={cardCanal}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span><MessageSquare size={18} color="#25D366"/> Vendas WhatsApp (IA Urgente)</span>
            <b style={{ color: '#25D366' }}>35%</b>
          </div>
          <div style={{ background: '#222', height: '8px', borderRadius: '10px', marginTop: '10px' }}>
            <div style={{ background: '#25D366', width: '35%', height: '100%', borderRadius: '10px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
const cardCanal = { background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333' };
