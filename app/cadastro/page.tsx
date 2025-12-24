'use client';
import { useState } from 'react';
import { Camera, User, FileText, MapPin, ScanFace, Loader2, ShieldCheck } from 'lucide-react';

export default function CadastroMestre() {
  const [etapa, setEtapa] = useState('dados'); 
  const [escaneando, setEscaneando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const iniciarEscaneamento = () => {
    setEscaneando(true);
    setTimeout(() => { setEscaneando(false); setSucesso(true); }, 3000);
  };

  return (
    <div style={{ background: '#000', minHeight: '100vh', color: '#fff', padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#ceae00', margin: 0 }}>BR EXPRESS ®</h1>
        <p style={{ color: '#444', fontSize: '10px' }}>SISTEMA DE SEGURANÇA FACIAL</p>
      </header>

      {etapa === 'dados' ? (
        <div style={cardS}>
          <div style={inputBox}><User size={18} color="#ceae00"/><input placeholder="Nome Completo" style={inputIn}/></div>
          <div style={inputBox}><FileText size={18} color="#ceae00"/><input placeholder="CPF" style={inputIn}/></div>
          <div style={inputBox}><MapPin size={18} color="#ceae00"/><input placeholder="CEP" style={inputIn}/></div>
          <button onClick={() => setEtapa('facial')} style={btnG}>AVANÇAR PARA SCANNER</button>
        </div>
      ) : (
        <div style={cardS}>
          <div style={cameraFrame}>
            {escaneando ? (
              <div style={scannerOverlay}><div style={scannerLine}></div><Loader2 className="animate-spin" color="#ceae00" /></div>
            ) : sucesso ? ( <ScanFace size={60} color="#0f0" /> ) : ( <Camera size={40} color="#333" /> )}
          </div>
          {!sucesso ? (
            <button onClick={iniciarEscaneamento} disabled={escaneando} style={btnG}>{escaneando ? "ANALISANDO BIOMETRIA..." : "ESCANEAR ROSTO"}</button>
          ) : (
            <button onClick={() => window.location.href = '/delivery'} style={btnG}>ACESSAR SISTEMA</button>
          )}
        </div>
      )}
      <style>{`@keyframes scan { 0% { top: 0; } 100% { top: 100%; } } .animate-spin { animation: spin 2s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
const cardS = { background: '#111', padding: '25px', borderRadius: '20px', border: '1px solid #222' };
const inputBox = { display: 'flex', alignItems: 'center', background: '#000', padding: '0 15px', borderRadius: '10px', border: '1px solid #333', marginBottom: '10px' };
const inputIn = { width: '100%', padding: '15px', background: 'transparent', border: 'none', color: '#fff', outline: 'none' };
const btnG = { width: '100%', padding: '18px', background: '#ceae00', color: '#000', border: 'none', borderRadius: '12px', fontWeight: '900', cursor: 'pointer' };
const cameraFrame = { width: '100%', height: '280px', background: '#000', border: '2px solid #ceae00', borderRadius: '20px', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const scannerOverlay = { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)' };
const scannerLine = { position: 'absolute', width: '100%', height: '2px', background: '#ceae00', boxShadow: '0 0 15px #ceae00', animation: 'scan 2s linear infinite' };
