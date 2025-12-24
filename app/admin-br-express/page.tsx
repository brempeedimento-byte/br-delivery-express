'use client';
import { useState } from 'react';
import { Check, X, ShieldCheck, Factory, Zap, Megaphone } from 'lucide-react';

export default function TorreAprovacao() {
  const [painel, setPainel] = useState(null);

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '15px', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #ceae00', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#ceae00', fontSize: '1.2rem' }}>BR EXPRESS | COMANDO GERAL</h1>
      </header>

      {/* FILA DE APROVAÇÃO DE FORNECEDORES */}
      <div onClick={() => setPainel('aprovacao')} style={cardMestre}>
        <ShieldCheck color="#ceae00" />
        <div>
          <h3 style={{margin:0}}>FILA DE APROVAÇÃO</h3>
          <small style={{color:'#0f0'}}>03 Novos cadastros aguardando</small>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
        <div style={cardMini}><Factory color="#ceae00"/> <b>FORNECEDORES</b></div>
        <div style={cardMini}><Megaphone color="#ceae00"/> <b>MARCAS/ADS</b></div>
      </div>

      {painel === 'aprovacao' && (
        <div style={modalFull}>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
            <h2 style={{color:'#ceae00'}}>VERIFICAÇÃO DE IDENTIDADE</h2>
            <X onClick={()=>setPainel(null)} color="#ceae00" />
          </div>
          
          <div style={requestCard}>
            <div style={{background:'#222', height:'100px', borderRadius:'8px', marginBottom:'10px', display:'flex', alignItems:'center', justifyContent:'center'}}>FOTO DA FACHADA</div>
            <h4>ATACADÃO SANTOS</h4>
            <p style={{fontSize:'12px', color:'#888'}}>CNPJ: 00.000.000/0001-00</p>
            <div style={{display:'flex', gap:'10px', marginTop:'20px'}}>
              <button style={{flex:1, background:'#0f0', color:'#000', border:'none', padding:'10px', borderRadius:'8px', fontWeight:'bold'}} onClick={()=>alert('Fornecedor Liberado!')}>APROVAR E LIBERAR LOGIN</button>
              <button style={{flex:1, background:'#f00', color:'#fff', border:'none', padding:'10px', borderRadius:'8px', fontWeight:'bold'}}>REJEITAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const cardMestre = { background: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #ceae00', marginBottom: '20px', display: 'flex', gap: '15px', cursor: 'pointer' };
const cardMini = { background: '#111', padding: '15px', borderRadius: '12px', border: '1px solid #222', textAlign: 'center' };
const modalFull = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: '#000', zIndex: 100, padding: '25px' };
const requestCard = { background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333' };
