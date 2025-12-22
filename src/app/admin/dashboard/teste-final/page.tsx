'use client';
export default function PainelCEO() {
  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ borderBottom: '1px solid #0f0', paddingBottom: '10px' }}>🚀 CENTRAL DE COMANDO - CEO</h2>
      <div style={{ border: '1px solid #333', padding: '20px', background: '#111', marginTop: '20px' }}>
        <p>📡 STATUS: OPERACIONAL</p>
        <p>🚚 LOGÍSTICA: JANELAS DE 15 MIN (ATIVO)</p>
        <p>🛡️ SUPORTE: INVESTIGAÇÃO GPS ANTES DE RE-PEDIDO (ATIVO)</p>
        <button onClick={() => alert('Simulando acúmulo de pedidos Mangabeira...\nLucro maximizado por rota!')} style={{ width: '100%', padding: '20px', background: '#0f0', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '20px' }}>SIMULAR ROTA DE 15 MINUTOS</button>
      </div>
    </div>
  )
}
