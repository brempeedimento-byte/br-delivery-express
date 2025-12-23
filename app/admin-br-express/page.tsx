'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function Admin() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const { data } = await supabase.from('investidores').select('*');
      if (data) setDados(data);
    };
    carregar();
  }, []);

  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#ceae00' }}>TORRE DE CONTROLE</h1>
      {dados.map((i, k) => (
        <div key={k} style={{ borderBottom: '1px solid #333', padding: '10px' }}>
          <p>WhatsApp: {i.whatsapp} | Valor: R$ {i.valor_aporte}</p>
        </div>
      ))}
    </div>
  );
}
