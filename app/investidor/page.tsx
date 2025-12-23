'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Investidor() {
  const [v, setV] = useState('');
  const [w, setW] = useState('');
  const [s, setS] = useState('');

  const enviar = async () => {
    setS('Processando...');
    const { error } = await supabase.from('investidores').insert([{ valor_aporte: v, whatsapp: w }]);
    setS(error ? 'Erro na conexão' : 'Proposta enviada!');
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#ceae00' }}>INVESTIDOR BR</h1>
      <input placeholder="Valor R$" onChange={e => setV(e.target.value)} style={{ display: 'block', margin: '15px auto', padding: '12px', width: '250px' }} />
      <input placeholder="WhatsApp" onChange={e => setW(e.target.value)} style={{ display: 'block', margin: '15px auto', padding: '12px', width: '250px' }} />
      <button onClick={enviar} style={{ background: '#ceae00', padding: '15px 30px', fontWeight: 'bold', border: 'none' }}>SOLICITAR COTA</button>
      <p>{s}</p>
      <br/><a href="/" style={{color: '#888'}}>Voltar</a>
    </div>
  );
}
