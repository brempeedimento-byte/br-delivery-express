import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const { distanciaKm } = await req.json();
  const valor = 5.00 + (distanciaKm > 3 ? (distanciaKm - 3) * 1.50 : 0);
  return NextResponse.json({ 
    origem: "Rua Coutinho, 36, Mangabeira",
    valor: valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  });
}
