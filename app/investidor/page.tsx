'use client';
import { Megaphone, CheckCircle, ShieldCheck, Rocket } from 'lucide-react';

export default function PortalAds() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px' }}>
      <header style={{textAlign: 'center', marginBottom: '30px'}}>
        <h1 style={{color: '#ceae00'}}>PLANO DE ANÚNCIOS BR EXPRESS</h1>
        <p>Domine o mercado com suporte especializado e design de elite.</p>
      </header>

      <div style={cardPlano}>
        <h2 style={{color: '#ceae00'}}>Assinatura Mensal</h2>
        <p style={{fontSize: '24px', fontWeight: 'bold'}}>1 Salário Mínimo / mês</p>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li style={liS}><CheckCircle size={16} color="#0f0"/> Criação de Design (30 dias)</li>
          <li style={liS}><CheckCircle size={16} color="#0f0"/> Gestão de Tráfego no Sistema</li>
          <li style={liS}><CheckCircle size={16} color="#0f0"/> Suporte Técnico Exclusivo</li>
        </ul>
        
        <div style={pixAlerta}>
          <p>Acesse o suporte e gere seu conteúdo agora.</p>
          <button style={btnG}>PAGAR ASSINATURA VIA PIX</button>
        </div>
      </div>
    </div>
  );
}
const cardPlano = { background: '#111', padding: '30px', borderRadius: '20px', border: '2px solid #ceae00', textAlign: 'center' };
const liS = { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', justifyContent: 'center' };
const btnG = { width: '100%', padding: '15px', background: '#ceae00', color: '#000', fontWeight: 'bold', border: 'none', borderRadius: '10px', marginTop: '20px' };
const pixAlerta = { marginTop: '30px', padding: '15px', background: '#000', borderRadius: '10px', border: '1px dashed #ceae00' };
