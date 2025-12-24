'use client';
import { useState } from 'react';
import { Camera, MapPin, Lock } from 'lucide-react';

export default function PortalFornecedor() {
  const [status, setStatus] = useState('cadastro');
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <h2 style={{ color: '#ceae00' }}>CADASTRO DE FORNECEDOR</h2>
      {status === 'cadastro' ? (
        <div style={{ background: '#111', padding: '20px', borderRadius: '15px' }}>
          <input placeholder="Nome da Loja" style={inP} />
          <div style={{ border: '2px dashed #333', padding: '30px', textAlign: 'center', margin: '15px 0' }}>
            <Camera color="#ceae00" /><br/><small>FOTO DA FACHADA (OBRIGATÓRIO)</small>
          </div>
          <button onClick={() => setStatus('analise')} style={btnG}>ENVIAR PARA A TORRE</button>
        </div>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Lock size={50} color="#ceae00" />
          <h3>SISTEMA EM ANÁLISE</h3>
          <p style={{ color: '#888' }}>Sua fachada e localização estão sendo verificadas.</p>
        </div>
      )}
    </div>
  );
}
const inP = { width: '100%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff' };
const btnG = { width: '100%', padding: '15px', background: '#ceae00', fontWeight: 'bold', border: 'none' };
