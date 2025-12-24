export const calcularTudo = (distanciaKm: number, valorProdutos: number) => {
  // Regra de Frete
  let freteBruto = distanciaKm <= 7 ? 12.00 : distanciaKm <= 14 ? 20.00 : distanciaKm * 1.50;
  
  // Splits Financeiros (Taxas)
  const lucroTorreFrete = freteBruto * 0.20; // Sua taxa de 20%
  const repasseEntregador = freteBruto - lucroTorreFrete;
  const lucroTorreProduto = valorProdutos * 0.10; // Sua comissão de 10%
  const repasseFornecedor = valorProdutos - lucroTorreProduto;

  return {
    totalCliente: valorProdutos + freteBruto,
    frete: freteBruto,
    lucroTotalTorre: lucroTorreFrete + lucroTorreProduto,
    repasseEntregador,
    repasseFornecedor
  };
};
