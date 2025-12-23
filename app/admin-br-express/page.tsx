'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Admin() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const carregar = async () => {
      const { data } = await supabase.from('investidores').select('*').order('created_at', { ascending: false });
      if (data) setDados(data);
    };
    carregar();
  }, []);

  return (
    <div style={{ padding: '30px', background: '#000', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#ceae00', borderBottom: '2px solid #ceae00' }}>TORRE DE CONTROLE</h1>
      <div style={{ marginTop: '20px' }}>
        {dados.map((i: any) => (
          <div key={i.id} style={{ padding: '15px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between' }}>
            <span>WhatsApp: {i.whatsapp}</span>
            <span style={{ color: '#ceae00' }}>R$ {i.valor_aporte}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
