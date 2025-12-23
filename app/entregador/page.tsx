export default function PainelEntregador() {
  return (
    <div style={{ background: '#000', color: '#0f0', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
      <h1>🏍️ PORTAL DO ENTREGADOR</h1>
      <p style={{ color: '#fff' }}>Faça seu cadastro para rodar em Mangabeira.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '40px auto' }}>
        <input placeholder="Nome Completo" style={{ padding: '15px' }} />
        <input placeholder="WhatsApp" style={{ padding: '15px' }} />
        <input placeholder="Placa da Moto/Veículo" style={{ padding: '15px' }} />
        <button style={{ background: '#0f0', color: '#000', padding: '15px', fontWeight: 'bold', border: 'none' }}>CADASTRAR AGORA</button>
      </div>
    </div>
  );
}
