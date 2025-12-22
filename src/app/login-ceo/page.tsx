export default function Page() {
  return (
    <div style={{background:'#000', color:'#0f0', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'monospace'}}>
      <h1 style={{border:'2px solid #0f0', padding:'20px'}}>CONEXÃO ESTABELECIDA</h1>
      <p>Comandante, se você está lendo isso, o bypass funcionou.</p>
      <a href="/admin/dashboard/teste-final" style={{marginTop:'20px', background:'#0f0', color:'#000', padding:'10px', textDecoration:'none', fontWeight:'bold'}}>ENTRAR NA CENTRAL</a>
    </div>
  )
}
