export const BR_CONFIG = {
  nome: "BR Delivery Express",
  versao: "2.0.0-PRO",
  regioes_ativas: ["Mangabeira", "Gabriela", "Amapá", "Centro"]
};

export const fatiarPedido = (itens, fornecedores) => {
  return itens.reduce((acc, item) => {
    const melhorFornecedor = fornecedores
      .filter(f => f.categoria === item.categoria && f.ativo)
      .sort((a, b) => a.precoCusto - b.precoCusto)[0];
    
    if (!acc[melhorFornecedor.id]) {
      acc[melhorFornecedor.id] = { nome: melhorFornecedor.nome, itens: [], custoTotal: 0 };
    }
    acc[melhorFornecedor.id].itens.push(item);
    acc[melhorFornecedor.id].custoTotal += item.precoCusto;
    return acc;
  }, {});
};
