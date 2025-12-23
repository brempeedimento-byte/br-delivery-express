'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { LayoutDashboard, Users, TrendingUp, Package } from 'lucide-react';

export default function TorreControle() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const monitorar = async () => {
      const { data } = await supabase.from('investidores').select('*').order('created_at', { ascending: false });
      if (data) setDados(data);
      setCarregando(false);
    };
    monitorar();
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #ceae00', paddingBottom: '20px', marginBottom: '30px' }}>
        <h1 style={{ color: '#ceae00', margin: 0 }}>TORRE DE CONTROLE BR EXPRESS</h1>
        <p style={{ color: '#888', margin: 0 }}>Monitoramento de Ordem e Estrutura em Tempo Real</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        <div style={cardStyle}><TrendingUp color="#ceae00"/><h2 style={{margin:'10px 0'}}>R$ 0,00</h2><p>Faturamento Previsto</p></div>
        <div style={cardStyle}><Users color="#ceae00"/><h2 style={{margin:'10px 0'}}>{dados.length}</h2><p>Novos Sócios/Leads</p></div>
        <div style={cardStyle}><Package color="#ceae00"/><h2 style={{margin:'10px 0'}}>100%</h2><p>Integridade do Sistema</p></div>
      </div>

      <section style={{ marginTop: '40px', background: '#0a0a0a', padding: '20px', borderRadius: '10px', border: '1px solid #222' }}>
        <h3 style={{ borderBottom: '1px solid #333', paddingBottom: '10px' }}>Log de Movimentação</h3>
        {carregando ? <p>Sincronizando...</p> : dados.map((d:any) => (
          <div key={d.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #111' }}>
            <span>WhatsApp: {d.whatsapp}</span>
            <span style={{ color: '#ceae00' }}>Cota: {d.cota_estimada}%</span>
          </div>
        ))}
      </section>
    </div>
  );
}
const cardStyle = { background: '#111', padding: '20px', borderRadius: '12px', border: '1px solid #333' };
