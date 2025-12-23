export default function Home() {
  return (
    <div style={{ background: '#000', color: '#0f0', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', textAlign: 'center', padding: '20px' }}>
      <h1 style={{ border: '4px solid #0f0', padding: '20px', marginBottom: '10px' }}>BR DELIVERY EXPRESS</h1>
      <p style={{ color: '#fff', marginBottom: '30px' }}>LOGÍSTICA MANGABEIRA - SISTEMA ATIVO</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '300px' }}>
        <a href="/shop" style={{ background: '#0f0', color: '#000', padding: '20px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '8px' }}>🛒 ACESSAR MARKETPLACE</a>
        <a href="/entregador" style={{ background: '#111', color: '#0f0', border: '1px solid #0f0', padding: '15px', textDecoration: 'none', borderRadius: '8px' }}>🏍️ ÁREA DO ENTREGADOR</a>
        <a href="/fornecedor" style={{ background: '#111', color: '#0f0', border: '1px solid #0f0', padding: '15px', textDecoration: 'none', borderRadius: '8px' }}>🤝 ÁREA DO FORNECEDOR</a>
      </div>
      
      <p style={{ marginTop: '40px', color: '#444', fontSize: '10px' }}>ID: OPERACAO-MANGABEIRA-2025</p>
    </div>
  )
}
