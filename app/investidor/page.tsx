'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Investidor() {
  const [valor, setValor] = useState('');
  const [whats, setWhats] = useState('');
  const [status, setStatus] = useState('');
  const equity = valor ? (Number(valor) / 10000 * 2).toFixed(2) : '0.00';

  const enviar = async () => {
    setStatus('Processando...');
    const { error } = await supabase.from('investidores').insert([
      { valor_aporte: valor, whatsapp: whats, cota_estimada: equity }
    ]);
    if (error) setStatus('Erro na conexão.');
    else setStatus('Sucesso! Proposta enviada.');
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ceae00', textAlign: 'center' }}>INVESTIDOR BR EXPRESS</h1>
      <div style={{ maxWidth: '400px', margin: '0 auto', background: '#111', padding: '20px', borderRadius: '15px' }}>
        <input placeholder="Valor R$" value={valor} onChange={e => setValor(e.target.value)} style={{ width: '100%', padding: '15px', marginBottom: '10px' }} />
        <input placeholder="WhatsApp" value={whats} onChange={e => setWhats(e.target.value)} style={{ width: '100%', padding: '15px', marginBottom: '10px' }} />
        <button onClick={enviar} style={{ width: '100%', padding: '15px', background: '#ceae00', fontWeight: 'bold' }}>ENVIAR PROPOSTA</button>
        <p style={{ textAlign: 'center', color: '#ceae00' }}>{status}</p>
      </div>
    </div>
  );
}
