'use client';
export default function Home() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex' }}>
      {/* MANIFESTO BR EXPRESS */}
      <div style={{ width: '35%', padding: '60px', backgroundColor: '#111', borderRight: '2px solid #ceae00', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ color: '#ceae00', fontSize: '3rem', fontWeight: '900', marginBottom: '10px' }}>BR EXPRESS</h1>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#ceae00', marginBottom: '30px' }}></div>
        <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '20px' }}>Logística Inteligente & Consumo Premium</h2>
        <p style={{ color: '#888', lineHeight: '1.8', fontSize: '1.1rem' }}>
          A plataforma definitiva para praticidade e segurança. 
          Conectamos fornecedores de elite a uma rede logística ágil sob o selo de qualidade da **BR Empreendimentos**.
          <br/><br/>
          Praticidade que move o seu dia, segurança que protege o seu patrimônio.
        </p>
        <div style={{ marginTop: '40px', color: '#ceae00', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 'bold' }}>UMA DIVISÃO BR EMPREENDIMENTOS</div>
      </div>

      {/* ACESSOS E FUNIL */}
      <div style={{ flexGrow: 1, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', backgroundColor: '#000' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ gridColumn: '1 / span 2', background: '#ceae00', padding: '40px', borderRadius: '15px', textAlign: 'center' }}>
            <h3 style={{ color: '#000', margin: 0, fontSize: '2rem', fontWeight: '900' }}>SHOPPING DIGITAL</h3>
            <p style={{ color: '#333', fontWeight: 'bold' }}>Hortifruti • Alimentação • Bebidas</p>
            <a href="/cadastro" style={{ display: 'inline-block', marginTop: '20px', padding: '15px 40px', background: '#000', color: '#fff', textDecoration: 'none', fontWeight: 'bold', borderRadius: '50px' }}>ACESSAR CATÁLOGO</a>
          </div>

          <a href="/fornecedor" style={{ textDecoration: 'none', background: '#1a1a1a', padding: '25px', borderRadius: '15px', border: '1px solid #333', textAlign: 'center' }}>
            <h4 style={{ color: '#ceae00' }}>FORNECEDORES</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>Seja um parceiro</p>
          </a>
          
          <a href="/entregador" style={{ textDecoration: 'none', background: '#1a1a1a', padding: '25px', borderRadius: '15px', border: '1px solid #333', textAlign: 'center' }}>
            <h4 style={{ color: '#ceae00' }}>ENTREGADORES</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>Logística de alta performance</p>
          </a>

          <a href="/investidor" style={{ gridColumn: '1 / span 2', textDecoration: 'none', background: '#fff', padding: '25px', borderRadius: '15px', textAlign: 'center', border: '2px solid #ceae00' }}>
            <h4 style={{ color: '#000', fontWeight: '900' }}>💎 SEJA SÓCIO-INVESTIDOR (EQUITY)</h4>
            <p style={{ fontSize: '0.9rem', color: '#333' }}>Participe da expansão do capital da BR Empreendimentos</p>
          </a>
        </div>
      </div>
    </div>
  );
}
