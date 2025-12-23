'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { TrendingUp, Users, DollarSign, Package } from 'lucide-react';

export default function AdminTorre() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('investidores').select('*');
      if (data) setDados(data);
    };
    fetch();
  }, []);

  return (
    <div style={{ padding: '30px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: '#ceae00' }}>TORRE DE CONTROLE 360°</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={cardStyle}><h3>R$ 50.000</h3><p>Vendas Hoje</p></div>
        <div style={cardStyle}><h3>{dados.length}</h3><p>Investidores</p></div>
        <div style={cardStyle}><h3>120</h3><p>Entregas Ativas</p></div>
      </div>

      <div style={{ background: '#111', padding: '20px', borderRadius: '10px', border: '1px solid #ceae00' }}>
        <h2 style={{ color: '#ceae00' }}>Últimas Movimentações</h2>
        {dados.map((i:any) => (
          <div key={i.id} style={{ padding: '10px', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between' }}>
            <span>WhatsApp: {i.whatsapp}</span>
            <span style={{ color: '#ceae00' }}>R$ {i.valor_aporte}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
const cardStyle = { background: '#111', padding: '20px', borderRadius: '10px', border: '1px solid #333', textAlign: 'center' as const };
