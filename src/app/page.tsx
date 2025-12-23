export default function Page() {
  return (
    <div style={{ background: '#000', color: '#0f0', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', textAlign: 'center' }}>
      <h1 style={{ border: '4px solid #0f0', padding: '20px', marginBottom: '20px' }}>SISTEMA BR DELIVERY OPERACIONAL</h1>
      <div style={{ background: '#111', padding: '20px', borderRadius: '10px', border: '1px solid #333' }}>
        <p style={{ color: '#fff' }}>LOGÍSTICA MANGABEIRA: ATIVA (JANELA 15 MIN)</p>
        <p style={{ color: '#888' }}>STATUS: AGUARDANDO CONEXÃO WHATSAPP</p>
      </div>
      <a href="/admin/dashboard/teste-final" style={{ marginTop: '30px', background: '#0f0', color: '#000', padding: '15px 30px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>
        ABRIR PAINEL DE CONTROLE
      </a>
    </div>
  )
}
