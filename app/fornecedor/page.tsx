'use client';
import { useState } from 'react';
import { Camera, MapPin, Lock } from 'lucide-react';

export default function PortalFornecedor() {
  const [status, setStatus] = useState('cadastro');
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <h2 style={{ color: '#ceae00' }}>CREDENCIAMENTO FORNECEDOR</h2>
      {status === 'cadastro' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input placeholder="Nome da Empresa" style={inStyle} />
          <div style={{ border: '2px dashed #333', padding: '30px', textAlign: 'center' }}>
            <Camera color="#ceae00" /><br/><small>FOTO DA FACHADA PARA VALIDAÇÃO</small>
          </div>
          <button onClick={() => setStatus('analise')} style={{ padding: '15px', background: '#ceae00', border: 'none', fontWeight: 'bold' }}>ENVIAR PARA APROVAÇÃO BR EXPRESS</button>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Lock size={50} color="#ceae00" />
          <h3>AGUARDANDO APROVAÇÃO DA TORRE</h3>
          <p style={{ color: '#666' }}>Verificamos sua identidade e localização em até 24h.</p>
        </div>
      )}
    </div>
  );
}
const inStyle = { padding: '15px', background: '#111', border: '1px solid #333', color: '#fff', borderRadius: '8px' };
