'use client';
export default function PainelCEO() {
  return (
    <div style={{ padding: '40px', color: '#0f0', fontFamily: 'monospace' }}>
      <h2>🚀 CENTRAL DE COMANDO - BR DELIVERY</h2>
      <div style={{ border: '1px solid #333', padding: '20px', background: '#111' }}>
        <p>📡 STATUS: OPERACIONAL</p>
        <p>�� LOGÍSTICA: JANELAS DE 15 MIN ATIVAS</p>
        <button onClick={() => alert('Simulando acúmulo de pedidos da Mangabeira...')} style={{ width: '100%', padding: '20px', background: '#0f0', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>SIMULAR ROTA (LUCRO MÁXIMO)</button>
      </div>
    </div>
  )
}
