export const metadata = {
  title: 'BR Delivery Express | Loja Mangabeira',
  description: 'Peça seu delivery em Mangabeira com entrega em 15 minutos. O melhor e-commerce da região.',
}

export default function Shop() {
  return (
    <div style={{ padding: '20px', background: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <header style={{ borderBottom: '2px solid #0f0', padding: '20px' }}>
        <h1 style={{ color: '#0f0' }}>BR DELIVERY - MANGABEIRA</h1>
        <p>O shopping na palma da sua mão</p>
      </header>
      
      <main style={{ marginTop: '50px' }}>
        <div style={{ border: '1px solid #333', padding: '40px', borderRadius: '15px' }}>
          <h2>🛒 NOSSA LOJA ESTÁ SENDO ABASTECIDA</h2>
          <p>Estamos conectando os fornecedores locais agora mesmo.</p>
          <div style={{ background: '#0f0', color: '#000', padding: '15px', fontWeight: 'bold', display: 'inline-block', marginTop: '20px', borderRadius: '5px' }}>
            EM BREVE: PRODUTOS COM ENTREGA EM 15 MIN
          </div>
        </div>
      </main>

      <footer style={{ marginTop: '50px', color: '#666', fontSize: '12px' }}>
        <p>© 2025 BR Delivery Express - Unidade Mangabeira</p>
      </footer>
    </div>
  )
}
