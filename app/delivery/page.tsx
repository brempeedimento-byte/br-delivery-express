'use client';
import { useState } from 'react';
import { ChevronLeft, ShoppingCart, ArrowLeft, CheckCircle } from 'lucide-react';

export default function DeliveryMaster() {
  const [nivel, setNivel] = useState('segmento'); 
  const [segAtivo, setSegAtivo] = useState(null);
  const [corAtivo, setCorAtivo] = useState(null);
  const [carrinho, setCarrinho] = useState([]);
  const [pago, setPago] = useState(false);

  const dados = {
    'ALIMENTAÇÃO': {
      'FRIOS': [{id:1, n:'Mussarela 200g', p:14.5, ref:'Sadia'}, {id:2, n:'Presunto 200g', p:12.9, ref:'Perdigão'}],
      'UTENSÍLIOS': [{id:3, n:'Talheres Set', p:45, ref:'Tramontina'}],
      'MERCEARIA': [{id:4, n:'Arroz 5kg', p:29.9, ref:'Tio João'}]
    },
    'HORTIFRUTI': {
      'FRUTAS': [{id:5, n:'Banana Kg', p:7.5, ref:'Fazenda'}],
      'LEGUMES': [{id:6, n:'Tomate Kg', p:9.2, ref:'Premium'}]
    },
    'BEBIDAS': {
      'REFRIGERANTES': [{id:7, n:'Coca 2L', p:11, ref:'Coca'}],
      'SUCOS': [{id:8, n:'Suco 1L', p:14, ref:'Natural'}]
    }
  };

  const total = carrinho.reduce((acc, i) => acc + i.p, 0).toFixed(2);

  if (pago) return (
    <div style={{background:'#000', height:'100vh', color:'#fff', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'20px'}}>
      <CheckCircle size={80} color="#ceae00" />
      <h1 style={{color:'#ceae00'}}>PAGAMENTO AGUARDADO</h1>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=PIX_BR_EXPRESS" style={{margin:'20px', border:'5px solid #fff'}} />
      <p>O pedido foi enviado para o fornecedor e entregador.</p>
      <button onClick={()=>window.location.href='/'} style={{background:'#ceae00', padding:'15px 30px', border:'none', fontWeight:'bold', marginTop:'20px'}}>VOLTAR</button>
    </div>
  );

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '20px', borderBottom: '1px solid #ceae00', display: 'flex', alignItems: 'center', gap: '15px', position:'sticky', top:0, background:'#000', zIndex:10 }}>
        {nivel !== 'segmento' && <ArrowLeft onClick={() => nivel === 'produto' ? setNivel('corredor') : setNivel('segmento')} style={{color:'#ceae00'}} />}
        <h2 style={{color:'#ceae00', margin:0}}>{nivel === 'segmento' ? 'BR SHOPPING' : (nivel === 'corredor' ? segAtivo : corAtivo)}</h2>
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
            <div>{p.n} <br/><small style={{color:'#555'}}>{p.ref} - R$ {p.p}</small></div>
            <button onClick={()=>setCarrinho([...carrinho, p])} style={{background:'#ceae00', border:'none', padding:'5px 15px', borderRadius:'5px', fontWeight:'bold'}}>+</button>
          </div>
        ))}
        {carrinho.length > 0 && nivel === 'segmento' && (
          <button onClick={()=>setPago(true)} style={{width:'100%', padding:'20px', background:'#ceae00', fontWeight:'bold', borderRadius:'10px', marginTop:'20px'}}>CONCLUIR PEDIDO (R$ {total})</button>
        )}
      </main>
    </div>
  );
}
const cardStyle = { background:'#111', padding:'20px', borderRadius:'12px', border:'1px solid #222', display:'flex', justifyContent:'space-between', marginBottom:'10px', alignItems:'center' };
