'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Investidor() {
  const [valor, setValor] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [status, setStatus] = useState('');
  const equity = valor ? (Number(valor) / 10000 * 2).toFixed(2) : '0.00';

  const enviarProposta = async () => {
    setStatus('Enviando...');
    const { error } = await supabase.from('investidores').insert([
      { valor_aporte: valor, whatsapp: whatsapp, cota_estimada: equity }
    ]);
    if (error) setStatus('Erro ao enviar. Tente novamente.');
    else setStatus('Proposta enviada com sucesso! O Conselho BR entrará em contato.');
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ color: '#ceae00', textAlign: 'center', fontWeight: '900' }}>BR EXPRESS - PRIVATE EQUITY</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '50px' }}>
          <div style={{ background: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #ceae00' }}>
            <h3 style={{ color: '#ceae00' }}>Governança & ROI</h3>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>Aporte em ativo tecnológico com balanço anual e distribuição de dividendos.</p>
            <p style={{ color: '#00ff88', fontSize: '0.8rem' }}>✓ Blindagem Patrimonial</p>
            <p style={{ color: '#00ff88', fontSize: '0.8rem' }}>✓ Crescimento de Equity</p>
          </div>
          <div style={{ background: '#1a1a1a', padding: '40px', borderRadius: '20px' }}>
            <input type="number" placeholder="Valor do Aporte R$" value={valor} onChange={(e) => setValor(e.target.value)} style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #333', color: '#ceae00', fontSize: '1.5rem', marginBottom: '10px' }} />
            <div style={{ background: '#000', padding: '15px', textAlign: 'center', border: '1px solid #ceae00', marginBottom: '10px' }}>
              <p style={{ margin: 0, fontSize: '0.8rem' }}>Sua Participação:</p>
              <h2 style={{ color: '#ceae00', margin: 0 }}>{equity}%</h2>
            </div>
            <input placeholder="Seu WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #333', color: '#fff', marginBottom: '10px' }} />
            <button onClick={enviarProposta} style={{ width: '100%', padding: '20px', background: '#ceae00', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>REQUISITAR ANÁLISE</button>
            <p style={{ textAlign: 'center', color: '#ceae00', marginTop: '10px' }}>{status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
