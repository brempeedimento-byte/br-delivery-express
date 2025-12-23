'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Investidor() {
  const [valor, setValor] = useState('');
  const [whats, setWhats] = useState('');
  const [status, setStatus] = useState('');
  const equity = valor ? (Number(valor) / 10000 * 2).toFixed(2) : '0.00';

  const enviar = async () => {
    if(!valor || !whats) { setStatus('Preencha os campos!'); return; }
    setStatus('Processando...');
    const { error } = await supabase.from('investidores').insert([{ valor_aporte: valor, whatsapp: whats, cota_estimada: equity }]);
    if (error) setStatus('Erro na conexão.');
    else setStatus('Sucesso! Proposta enviada.');
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ceae00', textAlign: 'center' }}>INVESTIDOR BR EXPRESS</h1>
      <div style={{ maxWidth: '400px', margin: '40px auto', background: '#111', padding: '30px', borderRadius: '15px', border: '1px solid #ceae00' }}>
        <input placeholder="Valor R$" value={valor} onChange={e => setValor(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '15px', background: '#000', color: '#fff', border: '1px solid #333' }} />
        <div style={{ padding: '15px', textAlign: 'center', background: '#000', border: '1px solid #ceae00', marginBottom: '15px' }}>
          <p style={{ margin: 0, fontSize: '0.8rem' }}>Sua Cota: <span style={{ color: '#ceae00', fontWeight: 'bold' }}>{equity}%</span></p>
        </div>
        <input placeholder="WhatsApp" value={whats} onChange={e => setWhats(e.target.value)} style={{ width: '100%', padding: '12px', marginBottom: '15px', background: '#000', color: '#fff', border: '1px solid #333' }} />
        <button onClick={enviar} style={{ width: '100%', padding: '15px', background: '#ceae00', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>ENVIAR PROPOSTA</button>
        <p style={{ textAlign: 'center', color: '#ceae00', marginTop: '15px' }}>{status}</p>
      </div>
    </div>
  );
}
