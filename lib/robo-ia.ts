export const saudacaoBR = (nomeUsuario: string = "Parceiro") => {
  return `Olá, ${nomeUsuario}! Bem-vindo à BR DELIVERY EXPRESS. 🚀
Estou aqui para agilizar seu pedido. 
Pode mandar áudio ou texto com o que você precisa AGORA. 
Eu já tenho seus dados, é só pedir e eu calculo o resto!`;
};

export const interpretarPedidoRapido = (msg: string) => {
  // Lógica para processar a "correria" do dia a dia
  return { status: "Lendo pedido...", acao: "Calcular Frete + Taxa 20%" };
};
