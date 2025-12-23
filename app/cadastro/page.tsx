'use client';
export default function Cadastro() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <div style={{ width: '100%', maxWidth: '500px', background: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
        <h1 style={{ color: '#ceae00', textAlign: 'center', marginBottom: '10px' }}>CADASTRO DE SEGURANÇA</h1>
        <p style={{ color: '#888', textAlign: '


# 1. Instala a biblioteca de conexão com o Banco de Dados
npm install @supabase/supabase-js

# 2. Configura as chaves de acesso no ambiente (segurança)
cat <<EOF > .env.local
NEXT_PUBLIC_SUPABASE_URL=https://senqbifsjqlzremfuphm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_VS0KfCroScCPQXj-NVbd3w_nvVHYTce
