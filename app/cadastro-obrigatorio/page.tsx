'use client';
import { Shield, CheckCircle } from 'lucide-react';

export default function CadastroBR() {
  const finalizar = () => window.location.href = '/delivery';
  
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#ceae00', margin: 0 }}>BR EXPRESS ®</h1>
        <p style={{ color: '#555', fontSize: '10px', letterSpacing: '2px' }}>SISTEMA DE IDENTIFICAÇÃO</p>
      </div>

      <div style={{ background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #222' }}>
        <input placeholder="Seu Nome" style={inS} />
        <input placeholder="WhatsApp com DDD" style={inS} />
        
        <div style={{ margin: '15px 0', padding: '10px', background: '#050505', borderRadius: '8px', border: '1px solid #333' }}>
          <p style={{ fontSize: '10px', color: '#888', margin: 0 }}>
            <Shield size={10} color="#ceae00" /> Ao clicar, você aceita nossa taxa de logística de 20% e os termos de uso.
          </p>
        </div>

        <button onClick={finalizar} style={btnS}>
           CONCORDAR E ENTRAR
        </button>
      </div>
    </div>
  );
}
const inS = { width: '100%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '8px', marginBottom: '10px' };
const btnS = { width: '100%', padding: '18px', background: '#ceae00', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };
