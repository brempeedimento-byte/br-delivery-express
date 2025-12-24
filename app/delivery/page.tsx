'use client';
import { useState, useEffect } from 'react';
import { calcularFrete } from '../../lib/logistica';
import { MapPin, Truck, ShoppingBag } from 'lucide-react';

export default function MarketplaceComRobo() {
  const [distanciaSimulada, setDistanciaSimulada] = useState(7); // KM entre Cliente e Fornecedor
  const [precoProduto, setPrecoProduto] = useState(50.00);
  
  const valorFrete = calcularFrete(distanciaSimulada);
  const valorTotal = precoProduto + valorFrete;

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      {/* FAIXA DE ADS (MONETIZAÇÃO) */}
      <div style={{ height: '70px', background: '#ceae00', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
         <marquee>🚀 BR EXPRESS ADS: ANÚNCIO DAS MARCAS 24H RODANDO AQUI...</marquee>
      </div>

      <main style={{ padding: '20px' }}>
        <div style={{ background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #222' }}>
          <h2 style={{ color: '#ceae00', marginTop: 0 }}>RESUMO DO PEDIDO</h2>
          
          <div style={infoLinha}>
            <span><ShoppingBag size={16}/> Produto:</span>
            <span>R$ {precoProduto.toFixed(2)}</span>
          </div>

          <div style={infoLinha}>
            <span><MapPin size={16}/> Distância:</span>
            <span>{distanciaSimulada} KM</span>
          </div>

          <div style={{ ...infoLinha, color: '#0f0', fontWeight: 'bold' }}>
            <span><Truck size={16}/> Frete Calculado:</span>
            <span>R$ {valorFrete.toFixed(2)}</span>
          </div>

          <div style={{ height: '1px', background: '#333', margin: '15px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span>TOTAL:</span>
            <span style={{ color: '#ceae00' }}>R$ {valorTotal.toFixed(2)}</span>
          </div>

          <button style={{ width: '100%', padding: '15px', background: '#ceae00', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginTop: '20px' }}>
            CONFIRMAR E PAGAR
          </button>
        </div>
      </main>
    </div>
  );
}

const infoLinha = { display: 'flex', justifyContent: 'space-between', margin: '10px 0', fontSize: '0.9rem' };
