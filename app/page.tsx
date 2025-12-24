'use client';
import Link from 'next/link';

export default function Home() {
  const perfis = [
    { n: 'SHOPPING / DELIVERY', d: 'Ir para Vitrine de Compras', l: '/delivery' },
    { n: 'INVESTIDORES', d: 'Aportes e Gestão de Capital', l: '/investidor' },
    { n: 'ENTREGADORES', d: 'Painel de Logística', l: '/entregador' },
    { n: 'FORNECEDORES', d: 'Gestão de Estoque', l: '/fornecedor' }
  ];
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <h1 style={{ color: '#ceae00', fontSize: '2.5rem', marginBottom: '40px' }}>BR EXPRESS</h1>
      <div style={{ display: 'grid', gap: '15px', width: '100%', maxWidth: '400px' }}>
        {perfis.map((p) => (
          <Link key={p.l} href={p.l} style={{ padding: '20px', borderRadius: '12px', textDecoration: 'none', border: '1px solid #ceae00', background: '#ceae00', color: '#000', textAlign: 'center' }}>
            <div style={{ fontWeight: 'bold' }}>{p.n}</div>
            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>{p.d}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
