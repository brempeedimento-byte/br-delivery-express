'use client';
import { MessageCircle, Zap, Info } from 'lucide-react';

export default function MarketplaceEducativo() {
  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      
      {/* MONITOR DE ADS 2CM */}
      <div style={{ height: '70px', background: '#ceae00', color: '#000', display: 'flex', alignItems: 'center', fontWeight: '900' }}>
        <marquee>🔥 BR DELIVERY EXPRESS: O JEITO MAIS RÁPIDO DE PEDIR É AQUI.</marquee>
      </div>

      <main style={{ padding: '20px' }}>
        <div style={{ background: '#111', padding: '20px', borderRadius: '15px', border: '1px solid #333' }}>
          <h2 style={{ color: '#ceae00' }}>CONHEÇA O PEDIDO EXPRESSO ⚡</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
            Já tem cadastro conosco? Então você não precisa mais de vitrine para a correria! 
            Basta salvar nosso WhatsApp e mandar um **Áudio**.
          </p>
          
          <ul style={{ fontSize: '13px', color: '#888', paddingLeft: '20px' }}>
            <li>Sem preencher formulários</li>
            <li>O Robô entende seu áudio</li>
            <li>Calculamos o frete e você só paga o Pix</li>
          </ul>

          <a href="https://wa.me/SEUNUMERO" style={{ textDecoration: 'none' }}>
            <button style={{ width: '100%', padding: '15px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
              <MessageCircle size={20} /> TESTAR AGORA NO WHATSAPP
            </button>
          </a>
        </div>
      </main>

      {/* SELO DE AUTORIDADE NO RODAPÉ */}
      <footer style={{ position: 'fixed', bottom: '0', width: '100%', textAlign: 'center', padding: '10px', background: '#000', fontSize: '10px', color: '#444' }}>
        BR DELIVERY EXPRESS ® - TECNOLOGIA DE PONTA PARA SUA CORRERIA
      </footer>
    </div>
  );
}
