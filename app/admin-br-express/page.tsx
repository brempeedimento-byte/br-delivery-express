'use client';
import { useState } from 'react';
import { Settings, Truck, DollarSign, X } from 'lucide-react';

export default function TorreConfigLogistica() {
  const [painel, setPainel] = useState(null);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '15px' }}>
      <h1 style={{ color: '#ceae00' }}>BR EXPRESS | CONFIGURAÇÕES</h1>
      
      <div onClick={() => setPainel('frete')} style={{ background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #ceae00', cursor: 'pointer' }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Settings color="#ceae00" />
          <div>
            <h3>TABELA DE FRETE DO ROBÔ</h3>
            <small>Defina valores por KM rodado</small>
          </div>
        </div>
      </div>

      {painel === 'frete' && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#000', padding: '25px', zIndex: 100 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>AJUSTE DE LOGÍSTICA</h2>
            <X onClick={() => setPainel(null)} />
          </div>

          <div style={{ marginTop: '20px' }}>
            <label>VALOR ATÉ 7KM (R$)</label>
            <input defaultValue="12.00" style={inStyle} />
            
            <label>VALOR ATÉ 14KM (R$)</label>
            <input defaultValue="20.00" style={inStyle} />
            
            <button style={{ width: '100%', padding: '15px', background: '#ceae00', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '20px' }}>
              ATUALIZAR ROBÔ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
const inStyle = { width: '100%', padding: '12px', margin: '10px 0', background: '#111', border: '1px solid #333', color: '#fff' };
