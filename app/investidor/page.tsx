'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Investidor() {
  const [valor, setValor] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [status, setStatus] = useState('');
  const equity = valor ? (Number(valor) / 10000 * 2).toFixed(2) : '0.00';

  const enviar = async () => {
    setStatus('Processando...');
    const { error } = await supabase.from('investidores').insert([
      { valor_aporte: valor, whatsapp: whatsapp, cota_estimada: equity }
    ]);
    if (error) setStatus('Erro na conexão.');
    else setStatus('Proposta enviada ao Conselho BR!');
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px' }}>
      <h1 style={{ color: '#ceae00', textAlign: 'center' }}>INVESTIDOR BR EXPRESS</h1>
      <div style={{ maxWidth: '500px', margin: '50px auto', background: '#111', padding: '30px', borderRadius: '15px' }}>
        <input type="number" placeholder="Valor Aporte R$" value={valor} onChange={(e) => setValor(e.target.value)} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: '#000', color: '#ceae00', border: '1px solid #333' }} />
        <div style={{ padding: '15px', textAlign: 'center', background: '#000', border: '1px solid #ceae00', marginBottom: '10px' }}>
          <p style={{ margin: 0 }}>Sua Cota: <span style={{ color: '#ceae00', fontWeight: 'bold' }}>{equity}%</span></p>
        </div>
        <input placeholder="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} style={{ width: '100%', padding: '15px', marginBottom: '10px', background: '#000', color: '#fff', border: '1px solid #333' }} />
        <button onClick={enviar} style={{ width: '100%', padding: '20px', background: '#ceae00', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>SOLICITAR SOCIEDADE</button>
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#ceae00' }}>{status}</p>
      </div>
    </div>
  );
}
