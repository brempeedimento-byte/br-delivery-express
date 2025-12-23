export default function Home() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: '#ceae00', fontSize: '3rem' }}>BR EXPRESS</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/cadastro" style={{ padding: '15px 30px', background: '#ceae00', color: '#000', textDecoration: 'none', fontWeight: 'bold' }}>SHOPPING</a>
        <a href="/investidor" style={{ padding: '15px 30px', border: '1px solid #ceae00', color: '#ceae00', textDecoration: 'none', fontWeight: 'bold' }}>INVESTIR</a>
      </div>
    </div>
  );
}
