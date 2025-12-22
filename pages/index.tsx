import React from 'react';
export default function Home() {
  return (
    <div style={{background:'#000', color:'#0f0', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', fontFamily:'monospace', textAlign:'center'}}>
      <h1 style={{border:'2px solid #0f0', padding:'20px'}}>BR DELIVERY EXPRESS: OPERACIONAL</h1>
      <p>Aguardando ordens do CEO.</p>
      <a href="/admin/dashboard/teste-final" style={{marginTop:'30px', color:'#000', background:'#0f0', padding:'15px', textDecoration:'none', fontWeight:'bold'}}>ACESSAR CENTRAL DE CONTROLE</a>
    </div>
  );
}
