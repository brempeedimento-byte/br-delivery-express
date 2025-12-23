'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', cpf: '', whatsapp: '', cep: '', endereco: '', numero: '' });
  const [status, setStatus] = useState('');

  const finalizar = async () => {
    setStatus('Salvando...');
    const { error } = await supabase.from('clientes').insert([form]);
    if (error) setStatus('Erro ao cadastrar.');
    else setStatus('Cadastro concluído! Acessando catálogo...');
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '500px', width: '100%', background: '#111', padding: '30px', borderRadius: '15px' }}>
        <h2 style={{ color: '#ceae00', textAlign: 'center' }}>CADASTRO SEGURO</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <input placeholder="Nome" onChange={e => setForm({...form, nome: e.target.value})} style={{ padding: '12px', background: '#000', color: '#fff', border: '1px solid #333' }} />
          <input placeholder="CPF" onChange={e => setForm({...form, cpf: e.target.value})} style={{ padding: '12px', background: '#000', color: '#fff', border: '1px solid #333' }} />
          <input placeholder="WhatsApp" onChange={e => setForm({...form, whatsapp: e.target.value})} style={{ padding: '12px', background: '#000', color: '#fff', border: '1px solid #333' }} />
          <input placeholder="CEP" onChange={e => setForm({...form, cep: e.target.value})} style={{ padding: '12px', background: '#000', color: '#fff', border: '1px solid #333' }} />
          <input placeholder="Endereço" onChange={e => setForm({...form, endereco: e.target.value})} style={{ padding: '12px', background: '#000', color: '#fff', border: '1px solid #333' }} />
          <button onClick={finalizar} style={{ padding: '20px', background: '#ceae00', color: '#000', fontWeight: 'bold', border: 'none', marginTop: '10px' }}>FINALIZAR CADASTRO</button>
          <p style={{ textAlign: 'center', color: '#ceae00' }}>{status}</p>
        </div>
      </div>
    </div>
  );
}
