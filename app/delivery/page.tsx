'use client';
import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ShoppingBag, CheckCircle, CreditCard, MessageCircle, Copy, Check } from 'lucide-react';

export default function DeliveryMaster() {
  const [nivel, setNivel] = useState('segmento'); 
  const [segAtivo, setSegAtivo] = useState(null);
  const [corAtivo, setCorAtivo] = useState(null);
  const [carrinho, setCarrinho] = useState([]);
  const [pixCopiado, setPixCopiado] = useState(false);
  const [finalizado, setFinalizado] = useState(null);

  const dados = {
    'ALIMENTAÇÃO': {
      'FRIOS': [{id:1, n:'Mussarela 200g', p:14.5, r:'Sadia'}, {id:2, n:'Presunto 200g', p:12.9, r:'Perdigão'}],
      'UTENSÍLIOS': [{id:3, n:'Talheres Set', p:45.0, r:'Tramontina'}],
      'MERCEARIA': [{id:5, n:'Arroz 5kg', p:29.9, r:'Tio João'}]
    },
    'HORTIFRUTI': {
      'FRUTAS': [{id:7, n:'Banana Prata Kg', p:7.5, r:'Fazenda'}],
      'LEGUMES': [{id:9, n:'Tomate Kg', p:9.2, r:'Premium'}]
    },
    'BEBIDAS': {
      'REFRIGERANTES': [{id:10, n:'Coca-Cola 2L', p:11.5, r:'Coca'}],
      'SUCOS': [{id:11, n:'Suco Uva 1L', p:14.9, r:'Natural'}]
    }
  };

  const infoPix = { chave: "000.000.000-00", cnpj: "44.000.000/0001-00", receptor: "BR EXPRESS LTDA", copia: "00020126580014BR.GOV.BCB.PIX0136SUACHAVE6304E2B1" };
  const total = carrinho.reduce((acc, i) => acc + i.p, 0).toFixed(2);

  if (finalizado === 'pix') return (
    <div style={{background:'#000', height:'100vh', color:'#fff', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'20px', textAlign:'center'}}>
      <CheckCircle size={60} color="#ceae00" />
      <h2 style={{color:'#ceae00'}}>PIX COPIA E COLA</h2>
      <div onClick={() => {navigator.clipboard.writeText(infoPix.copia); setPixCopiado(true);}} style={{background:'#111', padding:'15px', borderRadius:'10px', border:'1px dashed #ceae00', margin:'20px 0', wordBreak:'break-all', fontSize:'10px'}}>
        {infoPix.copia} <br/> {pixCopiado ? <b style={{color:'#0f0'}}>COPIADO!</b> : <b>CLIQUE PARA COPIAR</b>}
      </div>
      <button onClick={()=>window.location.href='/'} style={{background:'#ceae00', padding:'15px', border:'none', fontWeight:'bold', borderRadius:'5px'}}>CONCLUIR</button>
    </div>
  );

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', paddingBottom: '100px' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #ceae00', display: 'flex', alignItems: 'center', gap: '15px', position:'sticky', top:0, background:'#000', zIndex:10 }}>
        {nivel !== 'segmento' && <ArrowLeft onClick={() => nivel === 'produto' ? setNivel('corredor') : setNivel('segmento')} color="#ceae00" />}
        <h2 style={{color:'#ceae00', margin:0, fontSize:'1.1rem'}}>{nivel === 'segmento' ? 'VITRINE BR' : (nivel === 'corredor' ? segAtivo : corAtivo)}</h2>
      </header>

      <main style={{ padding: '15px' }}>
        {nivel === 'segmento' && Object.keys(dados).map(s => (
          <div key={s} onClick={()=>{setSegAtivo(s); setNivel('corredor');}} style={cardStyle}>{s} <ChevronLeft style={{transform:'rotate(180deg)'}} color="#ceae00" /></div>
        ))}
        {nivel === 'corredor' && Object.keys(dados[segAtivo]).map(c => (
          <div key={c} onClick={()=>{setCorAtivo(c); setNivel('produto');}} style={cardStyle}>{c} <ChevronLeft style={{transform:'rotate(180deg)'}} color="#ceae00" /></div>
        ))}
        {nivel === 'produto' && dados[segAtivo][corAtivo].map(p => (
          <div key={p.id} style={cardStyle}>
            <div>{p.n} <br/><small style={{color:'#ceae00'}}>R$ {p.p.toFixed(2)}</small></div>
            <button onClick={()=>setCarrinho([...carrinho, p])} style={{background:'#ceae00', border:'none', width:'40px', height:'40px', borderRadius:'8px'}}>+</button>
          </div>
        ))}
        {nivel === 'checkout' && (
          <div>
            <h3>REVISÃO</h3>
            {carrinho.map((item, idx) => <div key={idx} style={{display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid #222'}}>{item.n} <span>R$ {item.p}</span></div>)}
            <div style={optStyle} onClick={()=>setFinalizado('pix')}><CreditCard color="#ceae00"/> <b>COPIA E COLA (WEB)</b></div>
            <div style={{...optStyle, background:'#075e54'}} onClick={() => window.open('https://api.whatsapp.com/send?phone=558599999999&text=Pedido_Pix_CNPJ')}><MessageCircle color="#fff"/> <b>WHATSAPP BUSINESS</b></div>
          </div>
        )}
      </main>

      {carrinho.length > 0 && nivel !== 'checkout' && (
        <div onClick={()=>setNivel('checkout')} style={{position:'fixed', bottom:'20px', left:'5%', width:'90%', background:'#ceae00', color:'#000', borderRadius:'15px', padding:'15px 20px', display:'flex', justifyContent:'space-between', alignItems:'center', zIndex:100}}>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}><ShoppingBag size={24} /> <b style={{fontSize:'1.2rem'}}>R$ {total}</b></div>
          <span>CONCLUIR ➜</span>
        </div>
      )}
    </div>
  );
}
const cardStyle={background:'#111', padding:'25px', borderRadius:'15px', border:'1px solid #222', display:'flex', justifyContent:'space-between', marginBottom:'12px', alignItems:'center', cursor:'pointer'};
const optStyle={background:'#1a1a1a', padding:'20px', borderRadius:'10px', marginTop:'15px', display:'flex', gap:'15px', alignItems:'center', cursor:'pointer'};
