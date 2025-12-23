'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Investidor() {
  const [valor, setValor] = useState('');
  const [whats, setWhats] = useState('');
  const [status, setStatus] = useState('');
  const equity = valor ? (Number(valor) / 10000 * 2).toFixed(2) : '0.00';

  const enviar = async () => {
    setStatus('Enviando...');
    const { error } = await supabase.from('investidores').insert([
      { valor_aporte: valor, whatsapp: whats, cota_estimada: equity }
    ]);
    if (error) setStatus('Erro ao salvar.');
    else setStatus('Sucesso! Recebemos sua proposta.');
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ color: '#ceae00' }}>INVESTIDOR BR</h1>
      <input placeholder="Valor R$" value={valor} onChange={e => setValor(e.target.value)} style={{ padding: '15px', display: 'block', margin: '10px 0', width: '300px' }} />
      <input placeholder="WhatsApp" value={whats} onChange={e => setWhats(e.target.value)} style={{ padding: '15px', display: 'block', margin: '10px 0', width: '300px' }} />
      <button onClick={enviar} style={{ padding: '15px 30px', background: '#ceae00', color: '#000', border: 'none', fontWeight: 'bold' }}>ENVIAR</button>
      <p>{status}</p>
    </div>
  );
}
