export default function Home() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <h1 style={{ color: '#ceae00', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>BR EXPRESS</h1>
      <p style={{ color: '#888', letterSpacing: '2px' }}>LOGÍSTICA & INVESTIMENTOS</p>
      <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
        <a href="/cadastro" style={{ padding: '15px 35px', background: '#ceae00', color: '#000', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>SHOPPING</a>
        <a href="/investidor" style={{ padding: '15px 35px', border: '2px solid #ceae00', color: '#ceae00', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>INVESTIR</a>
      </div>
    </div>
  );
}
