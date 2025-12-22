'use client';
export default function PainelCEO() {
  const simularRota = () => {
    alert('Simulando Janela de 15 Minutos...\nAgrupando pedidos da Mangabeira para maximizar lucro!');
  };
  return (
    <div style={{padding:'40px', background:'#000', color:'#0f0', minHeight:'100vh', fontFamily:'monospace'}}>
      <h2 style={{borderBottom:'1px solid #0f0', paddingBottom:'10px'}}>🚀 CENTRAL DE TESTE REAL - BR DELIVERY</h2>
      <div style={{background:'#111', padding:'20px', marginTop:'20px', border:'1px solid #333'}}>
        <p>📡 Status do Sistema: 100% OPERACIONAL</p>
        <p>📦 Logística: Rotas Programadas (Ativo)</p>
        <p>🛡️ Segurança: Verificação de Incidentes (Ativo)</p>
        <button onClick={simularRota} style={{width:'100%', padding:'20px', background:'#0f0', color:'#000', border:'none', cursor:'pointer', fontWeight:'bold', fontSize:'16px', marginTop:'20px'}}>SIMULAR ACÚMULO DE PEDIDOS (LUCRO MÁXIMO)</button>
      </div>
      <div style={{marginTop:'30px', color:'#555'}}>Acesso Master: admin_br_express | Senha: BAHIA2025</div>
    </div>
  )
}
