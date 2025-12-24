'use client';
import { useState } from 'react';
import { Rocket, TrendingUp, Megaphone, Zap, Clock, ArrowRight, Copy, PenTool } from 'lucide-react';

export default function PainelInvest() {
  const [etapa, setEtapa] = useState('menu'); // menu, pitch, valor, pix, assinatura
  const [valor, setValor] = useState('');

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
        <Rocket size={30} color="#ceae00" style={{ transform: 'rotate(-45deg)' }} />
        <h1 style={{ margin: 0, fontSize: '20px' }}>BR EXPRESS</h1>
      </div>

      {etapa === 'menu' && (
        <div style={cardS}>
          <div onClick={() => setEtapa('pitch')} style={boxO}><Megaphone color="#ceae00" /> <b>ANÚNCIOS (ADS)</b></div>
          <div onClick={() => setEtapa('valor')} style={boxO}><TrendingUp color="#0f0" /> <b>COTAS SOCIETÁRIAS</b></div>
        </div>
      )}

      {etapa === 'pitch' && (
        <div style={cardS}>
          <h2 style={{color: '#ceae00', textAlign: 'center'}}>IMPULSIONE SUA MARCA</h2>
          <p style={{fontSize: '12px', color: '#888', textAlign: 'center'}}>Anuncie no Supermercado Digital 24h.</p>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0'}}>
            <div style={miniB}><Zap size={14} color="#ceae00"/> EXPOSIÇÃO 24H</div>
            <div style={miniB}><Clock size={14} color="#ceae00"/> ALTO IMPACTO</div>
          </div>
          <button onClick={() => setEtapa('valor')} style={btnG}>ADQUIRIR AGORA</button>
        </div>
      )}

      {etapa === 'valor' && (
        <div style={cardS}>
          <h3>Valor do Aporte:</h3>
          <input type="number" placeholder="R$ 0,00" style={inV} onChange={(e) => setValor(e.target.value)} />
          <button onClick={() => setEtapa('pix')} style={btnG}>GERAR PIX</button>
        </div>
      )}

      {etapa === 'pix' && (
        <div style={cardS}>
          <h3 style={{color: '#0f0', textAlign: 'center'}}>PAGUE O PIX ABAIXO</h3>
          <div style={pixBox}><code>00020126580014BR.GOV.BCB.PIX...</code></div>
          <button onClick={() => setEtapa('assinatura')} style={btnG}>JÁ PAGUEI, ASSINAR CONTRATO</button>
        </div>
      )}

      {etapa === 'assinatura' && (
        <div style={cardS}>
          <h3 style={{textAlign: 'center'}}>ASSINATURA DIGITAL</h3>
          <div style={{width: '100%', height: '150px', background: '#fff', borderRadius: '10px', marginTop: '10px', border: '2px solid #ceae00'}}></div>
          <button onClick={() => alert('Parabéns, Sócio!')} style={btnG}>CONFIRMAR ASSINATURA</button>
        </div>
      )}
    </div>
  );
}
const cardS = { background: '#111', padding: '25px', borderRadius: '20px', border: '1px solid #222' };
const boxO = { background: '#000', padding: '20px', borderRadius: '15px', marginBottom: '10px', display: 'flex', gap: '15px', alignItems: 'center', cursor: 'pointer', border: '1px solid #333' };
const inV = { width: '100%', padding: '15px', background: '#000', border: '1px solid #ceae00', color: '#fff', borderRadius: '10px', marginBottom: '10px' };
const btnG = { width: '100%', padding: '18px', background: '#ceae00', color: '#000', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' };
const miniB = { background: '#000', padding: '10px', borderRadius: '10px', border: '1px solid #222', textAlign: 'center', fontSize: '9px' };
const pixBox = { background: '#000', padding: '15px', border: '1px dashed #ceae00', borderRadius: '10px', wordBreak: 'break-all', textAlign: 'center' };
