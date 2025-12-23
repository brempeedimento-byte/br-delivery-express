export default function Shop() {
  return (
    <div style={{ padding: '20px', background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #0f0', paddingBottom: '10px' }}>
        <h1>🛒 BR Shop - Mangabeira</h1>
      </header>
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Cardápio Digital em Breve</h2>
        <p>A IA está organizando os melhores preços para você.</p>
        <button style={{ background: '#0f0', border: 'none', padding: '15px', fontWeight: 'bold' }}>VER PRODUTOS</button>
      </div>
    </div>
  )
}
