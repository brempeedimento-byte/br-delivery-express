'use client';
import { Gavel, AlertCircle, X, Check } from 'lucide-react';

export default function Tribunal() {
  const casos = [{ id: 1, nome: "Fornecedor X", motivo: "DANO FINANCEIRO", valor: "R$ 300,00", prazo: "2 dias" }];
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <h1 style={{ color: '#ceae00' }}><Gavel /> CASOS EM STAND-BY (JULGAMENTO)</h1>
      {casos.map(c => (
        <div key={c.id} style={{ background: '#111', padding: '20px', borderRadius: '10px', borderLeft: '5px solid #f00', marginBottom: '15px' }}>
          <h3>{c.nome} - <span style={{color: '#f00'}}>{c.motivo}</span></h3>
          <p>Prejuízo ao Sistema: {c.valor} | Prazo p/ Decisão: {c.prazo}</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button style={{background: '#050', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px'}}>ABSOLVER</button>
            <button style={{background: '#500', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px'}}>BANIR</button>
          </div>
        </div>
      ))}
    </div>
  );
}
