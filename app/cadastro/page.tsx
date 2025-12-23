'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
export default function Cadastro() {
  const [f, setF] = useState({ nome: '', whatsapp: '' });
  const [s, setS] = useState('');
  const enviar = async () => {
    setS('Salvando...');
    const { error } = await supabase.from('usuarios').insert([f]);
    setS(error ? 'Erro ao salvar' : 'Cadastrado com sucesso!');
  };
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#ceae00' }}>CADASTRO BR</h1>
      <input placeholder="Nome" onChange={e => setF({...f, nome: e.target.value})} style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
      <input placeholder="WhatsApp" onChange={e => setF({...f, whatsapp: e.target.value})} style={{ display: 'block', margin: '10px auto', padding: '10px' }} />
      <button onClick={enviar} style={{ background: '#ceae00', padding: '10px 20px', border: 'none', fontWeight: 'bold' }}>CADASTRAR</button>
      <p>{s}</p>
    </div>
  );
}
