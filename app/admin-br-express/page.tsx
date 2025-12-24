'use client';
import { useState } from 'react';
import { Users, ShoppingCart, Truck, Factory, TrendingUp, MapPin, AlertCircle, Database, X } from 'lucide-react';

export default function Torre360() {
  const [exp, setExp] = useState(null);
  const blocos = [
    { id:1, t:'VENDAS', v:'R$ 12.450', i:<ShoppingCart color="#ceae00"/>, d:'Fluxo de caixa em tempo real.' },
    { id:2, t:'SÓCIOS', v:'12', i:<TrendingUp color="#ceae00"/>, d:'Gestão de capital e dividendos.' },
    { id:3, t:'LOGÍSTICA', v:'14', i:<Truck color="#ceae00"/>, d:'Entregadores ativos na rua.' },
    { id:4, t:'ESTOQUE', v:'420', i:<Factory color="#ceae00"/>, d:'Produtos cadastrados por fornecedores.' },
    { id:5, t:'MAPA', v:'SETOR A', i:<MapPin color="#ceae00"/>, d:'Zonas de calor e entregas.' },
    { id:6, t:'CLIENTES', v:'182', i:<Users color="#ceae00"/>, d:'Base total de usuários web.' },
    { id:7, t:'ALERTAS', v:'03', i:<AlertCircle color="#f00"/>, d:'Alertas de sistema e ruptura.' },
    { id:8, t:'SERVER', v:'OK', i:<Database color="#ceae00"/>, d:'Integridade do Banco de Dados.' }
  ];

  return (
    <div style={{ background:'#000', minHeight:'100vh', padding:'10px', color:'#fff' }}>
      <header style={{borderBottom:'1px solid #ceae00', padding:'10px', marginBottom:'15px', color:'#ceae00', fontWeight:'bold'}}>BR COMMAND CENTER</header>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
        {blocos.map(b => (
          <div key={b.id} onClick={()=>setExp(b)} style={{background:'#111', padding:'15px', border:'1px solid #222', borderRadius:'10px'}}>
            {b.i} <div style={{fontSize:'1.4rem', color:'#ceae00', fontWeight:'bold'}}>{b.v}</div> <div style={{fontSize:'10px', color:'#666'}}>{b.t}</div>
          </div>
        ))}
      </div>
      {exp && (
        <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.95)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100}}>
          <div style={{width:'85%', background:'#0a0a0a', border:'1px solid #ceae00', padding:'30px', borderRadius:'15px'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}><h2 style={{color:'#ceae00'}}>{exp.t}</h2> <X onClick={()=>setExp(null)}/></div>
            <p style={{color:'#888'}}>{exp.d}</p>
            <div style={{background:'#111', padding:'15px', marginTop:'20px', borderRadius:'8px', border:'1px solid #222'}}>
              <small style={{color:'#555'}}>DADOS TÁTICOS ATUALIZADOS VIA SATÉLITE</small>
            </div>
            <button onClick={()=>setExp(null)} style={{width:'100%', background:'#ceae00', padding:'15px', border:'none', marginTop:'30px', fontWeight:'bold'}}>VOLTAR À TORRE</button>
          </div>
        </div>
      )}
    </div>
  );
}
