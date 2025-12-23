export default function PainelFornecedor() {
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#0f0' }}>🤝 PAINEL DO PARCEIRO</h1>
      <p>Gerencie seus produtos e pedidos aqui.</p>
      <div style={{ border: '2px dashed #333', padding: '50px', textAlign: 'center', marginTop: '30px' }}>
        <h3>Vendas de Hoje: R$ 0,00</h3>
        <button style={{ background: '#0f0', padding: '10px', marginTop: '10px' }}>CADASTRAR NOVO PRODUTO</button>
      </div>
    </div>
  );
}
