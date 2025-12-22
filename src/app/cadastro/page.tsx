'use client';
export default function CadastroGeral() {
  return (
    <div style={{ padding: '20px', background: '#000', color: '#ff6600', minHeight: '100vh' }}>
      <h2>📝 Cadastro de Identificação</h2>
      <p style={{ color: '#fff' }}>Obrigatório para Clientes, Fornecedores e Entregadores.</p>
      <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
        <input placeholder="Nome ou Razão Social" style={{ padding: '15px', background: '#111', color: '#fff', border: '1px solid #333' }} />
        <input placeholder="CPF ou CNPJ" style={{ padding: '15px', background: '#111', color: '#fff', border: '1px solid #333' }} />
        <input placeholder="Endereço Completo (Com Bairro)" style={{ padding: '15px', background: '#111', color: '#fff', border: '1px solid #333' }} />
        <button style={{ padding: '20px', background: '#ff6600', color: '#000', fontWeight: 'bold', border: 'none' }}>SALVAR E VALIDAR</button>
      </div>
    </div>
  );
}
