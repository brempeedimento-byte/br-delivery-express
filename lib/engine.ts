export const calcularFluxoFinanceiro = (distanciaKm: number, valorProdutos: number) => {
  // Regra de Frete (7km = 12, 14km = 20)
  const freteBruto = distanciaKm <= 7 ? 12.00 : distanciaKm <= 14 ? 20.00 : distanciaKm * 1.50;
  
  // Sua Taxa de 20% sobre o frete + 10% sobre o produto
  const lucroTorreFrete = freteBruto * 0.20;
  const lucroTorreProduto = valorProdutos * 0.10;
  
  return {
    totalCliente: valorProdutos + freteBruto,
    frete: freteBruto,
    repasseEntregador: freteBruto - lucroTorreFrete,
    repasseFornecedor: valorProdutos - lucroTorreProduto,
    lucroLiquidoTorre: lucroTorreFrete + lucroTorreProduto
  };
};

export const saudacaoIA = "Olá! Bem-vindo à BR DELIVERY EXPRESS. 🚀\nEstou pronto para ouvir seu áudio ou ler seu pedido. Já tenho seus dados, pode pedir!";
