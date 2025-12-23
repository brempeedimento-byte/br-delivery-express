'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Cadastro() {
  const [f, setF] = useState({ nome: '', whatsapp: '' });
  const [s, setS] = useState('');

  const enviar = async () => {
    setS('Enviando...');
    const { error } = await supabase.from('usuarios').insert([f]);
    setS(error ? 'Erro ao salvar' : 'Cadastrado com sucesso!');
  };

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: '#ceae00' }}>BR SHOPPING</h1>
      <input placeholder="Nome" onChange={e => setF({...f, nome: e.target.value})} style={{ display: 'block', margin: '15px auto', padding: '12px', width: '250px' }} />
      <input placeholder="WhatsApp" onChange={e => setF({...f, whatsapp: e.target.value})} style={{ display: 'block', margin: '15px auto', padding: '12px', width: '250px' }} />
      <button onClick={enviar} style={{ background: '#ceae00', padding: '15px 30px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>FINALIZAR</button>
      <p>{s}</p>
      <br/><a href="/" style={{color: '#888'}}>Voltar</a>
    </div>
  );
}
