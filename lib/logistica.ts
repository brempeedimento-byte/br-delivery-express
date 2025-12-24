// Algoritmo de Cálculo BR Express
export const calcularFrete = (distanciaKm: number) => {
  if (distanciaKm <= 7) return 12.00; // Valor base para curta distância
  if (distanciaKm <= 14) return 20.00; // Valor para média distância
  if (distanciaKm <= 20) return 28.00; // Tabela progressiva
  return distanciaKm * 1.5; // R$ 1,50 por km adicional para longas distâncias
};
