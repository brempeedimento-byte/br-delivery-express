'use client';
export default function LojaWeb() {
  return (
    <div style={{ padding: '20px', background: '#000', color: '#ff6600', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #ff6600', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <h2>🛒 BR Loja Express</h2>
        <div style={{ background: '#222', padding: '5px 15px', borderRadius: '20px' }}>Saldo: R$ 0,00</div>
      </header>
      <div style={{ marginTop: '20px' }}>
        <p style={{ color: '#fff' }}>Selecione seus produtos na Mangabeira e região:</p>
        <div style={{ background: '#111', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
          <strong>Tomate Selecionado (kg)</strong>
          <p style={{ color: '#00ff00' }}>R$ 6,50</p>
          <button style={{ width: '100%', padding: '10px', background: '#ff6600', border: 'none', fontWeight: 'bold' }}>ADICIONAR AO CARRINHO</button>
        </div>
      </div>
      <a href="https://wa.me/5575999999999" style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#25d366', color: '#fff', padding: '15px', borderRadius: '50px', textDecoration: 'none' }}>💬 Pedir pelo Zap</a>
    </div>
  );
}
