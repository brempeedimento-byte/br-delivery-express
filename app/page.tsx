export default function Home() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ceae00', fontSize: '3rem' }}>BR EXPRESS</h1>
      <p style={{ color: '#888' }}>Logística e Investimentos</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <a href="/cadastro" style={{ padding: '15px 30px', background: '#ceae00', color: '#000', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>SHOPPING</a>
        <a href="/investidor" style={{ padding: '15px 30px', border: '1px solid #ceae00', color: '#ceae00', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>INVESTIR</a>
      </div>
    </div>
  );
}
