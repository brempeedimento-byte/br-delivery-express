'use client';
import { useState } from 'react';
import { Camera, Package, MapPin, Send, Lock } from 'lucide-react';

export default function CadastroFornecedor() {
  const [etapa, setEtapa] = useState('cadastro');

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1 style={{ color: '#ceae00', fontSize: '1.2rem' }}>BR EXPRESS | PORTAL DO FORNECEDOR</h1>
      
      {etapa === 'cadastro' ? (
        <div style={{ background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #222' }}>
          <h3 style={{marginTop:0}}>Solicitar Credenciamento</h3>
          <p style={{fontSize:'12px', color:'#888'}}>Envie seus dados para análise de identidade e legalidade.</p>
          
          <label style={labStyle}>Nome do Estabelecimento / Razão Social</label>
          <input style={inStyle} placeholder="Ex: Atacadão Central" />
          
          <label style={labStyle}>Foto da Fachada / Documentos</label>
          <div style={{ border: '1px dashed #333', padding: '20px', textAlign: 'center', marginBottom: '15px' }}>
            <Camera color="#ceae00" />
            <div style={{fontSize:'10px'}}>Upload de Identidade e Local</div>
          </div>

          <label style={labStyle}>Localização (Link Maps ou Coordenadas)</label>
          <div style={{display:'flex', gap:'10px', marginBottom:'15px'}}>
            <input style={{...inStyle, margin:0}} placeholder="Coordenadas GPS" />
            <button style={{background:'#222', border:'none', padding:'10px', borderRadius:'8px'}}><MapPin size={18} color="#ceae00"/></button>
          </div>

          <button onClick={() => setEtapa('analise')} style={btnGold}>ENVIAR PARA APROVAÇÃO</button>
        </div>
      ) : etapa === 'analise' ? (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <Lock size={48} color="#ceae00" style={{marginBottom:'20px'}} />
          <h2>CONTA EM ANÁLISE</h2>
          <p style={{color:'#888'}}>Sua identidade e fotos estão sendo verificadas pela BR Express. Você receberá seu Login assim que for aprovado.</p>
        </div>
      ) : (
        <div style={{ background: '#111', padding: '20px', borderRadius: '15px' }}>
          <h3 style={{color:'#ceae00'}}>CADASTRO DE PRODUTOS</h3>
          <div style={prodBox}>
            <input placeholder="Nome do Produto" style={inStyle} />
            <input placeholder="Preço (R$)" style={inStyle} />
            <button style={btnGold}>CADASTRAR ITEM NO CATÁLOGO</button>
          </div>
        </div>
      )}
    </div>
  );
}

const inStyle = { width: '100%', padding: '12px', margin: '8px 0', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '8px' };
const labStyle = { fontSize: '10px', color: '#ceae00', fontWeight: 'bold' };
const btnGold = { width: '100%', padding: '15px', background: '#ceae00', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer' };
const prodBox = { padding: '15px', border: '1px solid #222', borderRadius: '10px' };
