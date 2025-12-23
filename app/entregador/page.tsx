export default function Entregador() {
  return (
    <div style={{ padding: '20px', background: '#000', color: '#0f0', minHeight: '100vh', textAlign: 'center' }}>
      <h1>🏍️ SEJA UM PARCEIRO LOGÍSTICO</h1>
      <p style={{ color: '#fff' }}>Ganhe por entrega na região da Mangabeira com rotas otimizadas de 15 min.</p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
        <input placeholder="Seu Nome" style={{ padding: '10px' }} />
        <input placeholder="Sua Moto (Modelo)" style={{ padding: '10px' }} />
        <button style={{ background: '#0f0', padding: '10px', fontWeight: 'bold' }}>QUERO ME CADASTRAR</button>
      </form>
    </div>
  )
}
