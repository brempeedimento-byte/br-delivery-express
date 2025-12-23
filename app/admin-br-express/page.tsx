'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Admin() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const { data } = await supabase.from('investidores').select('*').order('created_at', { ascending: false });
      if (data) setLogs(data);
    };
    carregar();
  }, []);

  return (
    <div style={{ padding: '30px', background: '#000', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ color: '#ceae00', borderBottom: '2px solid #ceae00', paddingBottom: '10px' }}>TORRE DE CONTROLE</h1>
      <div style={{ marginTop: '20px' }}>
        {logs.map((item: any) => (
          <div key={item.id} style={{ padding: '15px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between' }}>
            <span>WhatsApp: {item.whatsapp}</span>
            <span style={{ color: '#ceae00' }}>R$ {item.valor_aporte}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
