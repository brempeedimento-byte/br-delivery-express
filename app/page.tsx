'use client';
export default function Home() {
  const perfis = [
    { nome: 'SHOPPING / DELIVERY', desc: 'Dropshipping Web Integrado', link: '/delivery', destaque: true },
    { nome: 'INVESTIDORES', desc: 'Gestão de Cotas e Capital', link: '/investidor', destaque: true },
    { nome: 'ENTREGADORES', desc: 'Logística e Distribuição', link: '/entregador', destaque: false },
    { nome: 'FORNECEDORES', desc: 'Estoque e Suprimentos', link: '/fornecedor', destaque: false }
  ];
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#ceae00', fontSize: '3rem', margin: '0' }}>BR EXPRESS</h1>
        <p style={{ color: '#555', letterSpacing: '4px', fontSize: '0.8rem' }}>SISTEMA DE GESTÃO INTEGRADA</p>
      </header>
      <div style={{ display: 'grid', gap: '15px', width: '100%', maxWidth: '450px' }}>
        {perfis.map((p) => (
          <a key={p.nome} href={p.link} style={{ padding: '25px', borderRadius: '12px', textDecoration: 'none', border: '1px solid #ceae00', background: p.destaque ? '#ceae00' : 'transparent', color: p.destaque ? '#000' : '#ceae00' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{p.nome}</div>
            <div style={{ fontSize: '0.8rem', opacity: '0.8' }}>{p.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
