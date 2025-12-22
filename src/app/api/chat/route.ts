import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const mensagemCliente = body.message || "Pedido recebido via WhatsApp";
    
    // Aqui no futuro conectaremos a IA para separar:
    // "2 bacias de tomate" -> Produto: Tomate | Qtd: 2 bacias
    
    console.log("Mensagem recebida do robô:", mensagemCliente);

    return NextResponse.json({ 
      status: "Sucesso", 
      resposta: "BR Delivery Express: Pedido sendo processado!",
      detalhes: mensagemCliente 
    });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar pedido" }, { status: 500 });
  }
}
