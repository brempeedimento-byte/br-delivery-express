'use client';
import { useState } from 'react';
import { Rocket, Megaphone, TrendingUp, Zap, Clock, PenTool } from 'lucide-react';

export default function PortalInvest() {
  const [etapa, setEtapa] = useState('menu'); 
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <Rocket size={40} color="#ceae00" style={{ transform: 'rotate(-45deg)' }} />
        <h2>INVESTIMENTO BR EXPRESS</h2>
      </div>

      {etapa === 'menu' && (
        <div style={cardS}>
          <div onClick={() => setEtapa('ads')} style={boxO}><Megaphone color="#ceae00" /> <b>ADS (SUPERMERCADO 24H)</b></div>
          <div onClick={() => setEtapa('valor')} style={boxO}><TrendingUp color="#0f0" /> <b>COTAS SOCIETÁRIAS</b></div>
        </div>
      )}

      {etapa === 'ads' && (
        <div style={cardS}>
          <h3 style={{color: '#ceae00'}}>EXPONENCIALIZE SUA MARCA</h3>
          <p>Seu negócio em destaque no maior ecossistema digital.</p>
          <button onClick={() => setEtapa('valor')} style={btnG}>ADQUIRIR EXPOSIÇÃO</button>
        </div>
      )}

      {etapa === 'valor' && (
        <div style={cardS}>
          <h3>Valor do Aporte:</h3>
          <input type="number" placeholder="R$ 0,00" style={inV} />
          <button onClick={() => setEtapa('pix')} style={btnG}>GERAR PIX DE PAGAMENTO</button>
        </div>
      )}

      {etapa === 'pix' && (
        <div style={cardS}>
          <h3 style={{color: '#0f0'}}>PAGUE O PIX AGORA</h3>
          <div style={pixBox}><code>BR.GOV.BCB.PIX.CHAVE.EXPRESS.999</code></div>
          <button onClick={() => setEtapa('assinatura')} style={btnG}>CONFIRMAR E ASSINAR CONTRATO</button>
        </div>
      )}

      {etapa === 'assinatura' && (
        <div style={cardS}>
          <h3>ASSINATURA DO CONTRATO</h3>
          <div style={{height: '150px', background: '#fff', borderRadius: '10px', marginTop: '10px'}}></div>
          <button onClick={() => alert('Bem-vindo, Sócio!')} style={btnG}>FINALIZAR SOCIEDADE</button>
        </div>
      )}
    </div>
  );
}
const cardS = { background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #222' };
const boxO = { background: '#000', padding: '20px', borderRadius: '10px', marginBottom: '10px', display: 'flex', gap: '15px', border: '1px solid #333', cursor: 'pointer' };
const inV = { width: '100%', padding: '15px', background: '#000', border: '1px solid #ceae00', color: '#fff', borderRadius: '10px', marginBottom: '10px' };
const btnG = { width: '100%', padding: '15px', background: '#ceae00', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold' };
const pixBox = { background: '#000', padding: '15px', border: '1px dashed #ceae00', wordBreak: 'break-all', textAlign: 'center' };
