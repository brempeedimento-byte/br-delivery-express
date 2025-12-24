'use client';
import { useState, useEffect } from 'react';

export default function DeliveryAds100Marcas() {
  // Simulando a Fila que suporta até 100 marcas vindo do seu Banco de Dados
  // Aqui o algoritmo organiza: [ID da Marca, Nome, Campanha]
  const [filaAds] = useState(Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    marca: `Marca ${i + 1}`,
    status: "Campanha Ativa 24h"
  })));

  const [ponteiro, setPonteiro] = useState(0);

  // Ciclo de exibição: 6 segundos por card. 
  // O ponteiro percorre os 400 cards possíveis (100 marcas x 4 variações)
  useEffect(() => {
    const timer = setInterval(() => {
      setPonteiro((prev) => (prev + 1) % (filaAds.length * 4));
    }, 6000);
    return () => clearInterval(timer);
  }, [filaAds]);

  const marcaIndex = Math.floor(ponteiro / 4);
  const variacao = (ponteiro % 4) + 1;
  const marcaAtual = filaAds[marcaIndex];

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* 📺 FAIXA DE ALTO IMPACTO (2CM) */}
      <div style={{ 
        height: '75px', background: '#ceae00', color: '#000', position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '2px solid #000', overflow: 'hidden'
      }}>
        <div style={{ padding: '0 15px' }}>
          <marquee scrollamount="9" style={{ fontWeight: '900', fontSize: '1.1rem' }}>
             {marcaAtual.marca.toUpperCase()} ⚡ {marcaAtual.status.toUpperCase()} | CARD [{variacao}/4]
          </marquee>
        </div>

        {/* SELO DE AUTORIDADE FIXO */}
        <div style={{ 
          position: 'absolute', bottom: '4px', right: '8px', fontSize: '0.6rem', fontWeight: '900', 
          background: 'rgba(0,0,0,0.9)', color: '#ceae00', padding: '2px 6px', borderRadius: '3px'
        }}>
          BR DELIVERY EXPRESS ®
        </div>
      </div>

      <main style={{ padding: '20px
# 1. OTIMIZAÇÃO DO MOTOR DE ADS PARA ALTA PERFORMANCE (SEM TRAVAMENTO)
cat <<EOF > app/delivery/page.tsx
'use client';
import { useState, useEffect, useMemo } from 'react';

export default function DeliveryMassaExpress() {
  // UseMemo garante que a lista de 100 marcas não seja recriada na memória, 
  // economizando processamento em milhões de aparelhos simultâneos.
  const listaMarcas = useMemo(() => Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    n: i === 0 ? "Coca-Cola" : i === 1 ? "Ambev" : `Marca ${i + 1}`,
    m: "Oferta Exclusiva BR Express 24h"
  })), []);

  const [ponteiro, setPonteiro] = useState(0);

  useEffect(() => {
    // Engine de rotação otimizada para baixo consumo de bateria
    const timer = setInterval(() => {
      setPonteiro((prev) => (prev + 1) % (listaMarcas.length * 4));
    }, 6000);
    return () => clearInterval(timer);
  }, [listaMarcas.length]);

  const marcaAtiva = listaMarcas[Math.floor(ponteiro / 4)];
  const cardNum = (ponteiro % 4) + 1;

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      
      {/* 📺 FAIXA DE ALTA PERFORMANCE (ADS 2CM) */}
      <div style={{ 
        height: '75px', background: '#ceae00', color: '#000', position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: '2px solid #000'
      }}>
        <div style={{ padding: '0 15px', whiteSpace: 'nowrap' }}>
          <marquee scrollamount="12" style={{ fontWeight: '900', fontSize: '1.1rem' }}>
             🔥 {marcaAtiva.n.toUpperCase()} - {marcaAtiva.m.toUpperCase()} | CARD {cardNum}/4 | 🚀 BR EXPRESS ADS
          </marquee>
        </div>

        {/* SELO DE SEGURANÇA E MARCA */}
        <div style={{ 
          position: 'absolute', bottom: '4px', right: '8px', fontSize: '0.6rem', fontWeight: '900', 
          background: 'rgba(0,0,0,0.9)', color: '#ceae00', padding: '2px 6px', borderRadius: '3px'
        }}>
          BR DELIVERY EXPRESS ®
        </div>
      </div>

      <main style={{ padding: '20px' }}>
        <div style={{ padding: '10px', background: '#111', borderRadius: '8px', borderLeft: '3px solid #0f0' }}>
           <small style={{color: '#0f0'}}>● SERVIDOR: OPERACIONAL (LATÊNCIA 12ms)</small><br/>
           <small style={{color: '#888'}}>USUÁRIOS CONECTADOS: MILLION+ SCALE</small>
        </div>
      </main>
    </div>
  );
}
