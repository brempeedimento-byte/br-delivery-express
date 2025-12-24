'use client';
export default function Home() {
  const perfis = [
    { nome: 'SHOPPING / DELIVERY', desc: 'Mercado & Hortifruti Web', link: '/delivery', destaque: true },
    { nome: 'INVESTIDORES', desc: 'Painel de Cotas e Capital', link: '/investidor', destaque: true },
    { nome: 'ENTREGADORES', desc: 'Logística e Distribuição', link: '/entregador', destaque: false },
    { nome: 'FORNECEDORES', desc: 'Parcerias e Suprimentos', link: '/fornecedor', destaque: false }
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#ceae00', fontSize: '3rem', margin: '0' }}>BR EXPRESS</h1>
        <p style={{ color: '#555', letterSpacing: '4px', fontSize: '0.8rem' }}>SISTEMA DE GESTÃO INTEGRADA</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', width: '100%', maxWidth: '450px' }}>
        {perfis.map((p) => (
          <a key={p.nome} href={p.link} style={{ 
            padding: '25px', borderRadius: '12px', textDecoration: 'none', border: '1px solid #ceae00', transition: '0.3s',
            background: p.destaque ? '#ceae00' : 'transparent',
            color: p.destaque ? '#000' : '#ceae00'
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{p.nome}</div>
            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>{p.desc}</div>
          </a>
        ))}
      </div>
      <footer style={{ marginTop: '50px', color: '#333', fontSize: '0.7rem' }}>BR EMPREENDIMENTOS EXPRESS © 2025</footer>
    </div>
  );
}
