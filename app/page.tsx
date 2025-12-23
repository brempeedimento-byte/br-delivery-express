export default function Home() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <h1 style={{ color: '#ceae00', fontSize: '3rem', marginBottom: '0px' }}>BR EXPRESS</h1>
      <p style={{ color: '#888', letterSpacing: '2px', marginBottom: '30px' }}>LOGÍSTICA & INVESTIMENTOS</p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/cadastro" style={{ padding: '15px 30px', background: '#ceae00', color: '#000', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>SHOPPING</a>
        <a href="/investidor" style={{ padding: '15px 30px', border: '2px solid #ceae00', color: '#ceae00', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>INVESTIR</a>
      </div>
    </div>
  );
}
