export const interpretarPedido = (mensagem: string) => {
  // Simulação de Processamento de Linguagem Natural (NLP)
  // Em produção, isso conecta com OpenAI/Gemini para transcrever áudio e ler texto
  console.log("Robô BR Express interpretando:", mensagem);
  
  return {
    items: ["Cerveja Heineken", "Picanha"],
    endereco: "Extraído via IA",
    confianca: 0.98
  };
};
