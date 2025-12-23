'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Cadastro() {
  const [f, setF] = useState({ nome: '', whatsapp: '', cpf: '' });
  const [s, setS] = useState('');

  const salvar = async () => {
    setS('Salvando...');
    const { error } = await supabase.from('usuarios').insert([f]);
    setS(error ? 'Erro ao salvar' : 'Cadastro realizado!');
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ceae00' }}>BR SHOPPING</h1>
      <input placeholder="Nome" onChange={e => setF({...f, nome: e.target.value})} style={{ display: 'block', margin: '10px 0', padding: '12px', width: '100%', maxWidth: '300px' }} />
      <input placeholder="WhatsApp" onChange={e => setF({...f, whatsapp: e.target.value})} style={{ display: 'block', margin: '10px 0', padding: '12px', width: '100%', maxWidth: '300px' }} />
      <button onClick={salvar} style={{ background: '#ceae00', padding: '15px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>FINALIZAR</button>
      <p style={{ color: '#ceae00' }}>{s}</p>
    </div>
  );
}
