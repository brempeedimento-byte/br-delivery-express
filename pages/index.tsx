export default function Home() {
  return (
    <div style={{background:'#000', color:'#0f0', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'monospace', textAlign:'center', padding:'20px'}}>
      <h1 style={{color:'#ff6600'}}>SISTEMA BR DELIVERY EXPRESS</h1>
      <p>STATUS: AGUARDANDO COMANDO DO CEO</p>
      <a href="/admin/dashboard/teste-final" style={{color:'#fff', marginTop:'20px', border:'1px solid #ff6600', padding:'10px', textDecoration:'none'}}>ACESSAR PAINEL DE TESTE</a>
    </div>
  )
}
