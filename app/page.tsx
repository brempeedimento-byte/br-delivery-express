'use client';
export default function Home() {
  const perfis = [
    { n: 'SHOPPING / DELIVERY', d: 'Dropshipping Web & Atacadão', l: '/delivery', v: true },
    { n: 'INVESTIDORES', d: 'Aportes e Gestão de Capital', l: '/investidor', v: true },
    { n: 'ENTREGADORES', d: 'Logística de Distribuição', l: '#', v: false },
    { n: 'FORNECEDORES', d: 'Cadastro de Estoque', l: '/fornecedor', v: false }
  ];
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <h1 style={{ color: '#ceae00', fontSize: '2.5rem', marginBottom: '40px' }}>BR EXPRESS</h1>
      <div style={{ display: 'grid', gap: '15px', width: '100%', maxWidth: '400px' }}>
        {perfis.map((p) => (
          <a key={p.n} href={p.l} style={{ padding: '20px', borderRadius: '12px', textDecoration: 'none', border: '1px solid #ceae00', background: p.v ? '#ceae00' : 'transparent', color: p.v ? '#000' : '#ceae00' }}>
            <div style={{ fontWeight: 'bold' }}>{p.n}</div>
            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>{p.d}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
