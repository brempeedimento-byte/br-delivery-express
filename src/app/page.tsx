"use client";
import React from 'react';

export default function BrDelivery() {
  return (
      <div className="min-h-screen bg-black text-white p-6 font-sans">
            <nav className="flex justify-between items-center border-b border-zinc-800 pb-4 mb-8">
                    <h1 className="text-xl font-black text-orange-500">BR DELIVERY EXPRESS</h1>
                            <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-[10px] font-bold text-zinc-500 uppercase">Online</span>
                                                        </div>
                                                              </nav>

                                                                    <div className="bg-orange-600 p-6 rounded-2xl mb-8 shadow-lg">
                                                                            <h2 className="text-2xl font-bold text-white">Rotas a cada 15min</h2>
                                                                                    <p className="text-sm text-white opacity-90">Sede: Mangabeira - Av. Inglaterra</p>
                                                                                          </div>

                                                                                                <div className="grid grid-cols-1 gap-4 mb-20">
                                                                                                        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
                                                                                                                  <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Hortifruti</p>
                                                                                                                            <p className="text-2xl font-black mt-1 text-white">12 Bacias</p>
                                                                                                                                    </div>
                                                                                                                                            <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
                                                                                                                                                      <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Mercado Seco</p>
                                                                                                                                                                <p className="text-2xl font-black mt-1 text-white">07 Pacotes</p>
                                                                                                                                                                        </div>
                                                                                                                                                                                <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800">
                                                                                                                                                                                          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Bebidas</p>
                                                                                                                                                                                                    <p className="text-2xl font-black mt-1 text-white">05 Unidades</p>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                        <button className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-orange-500 text-black font-black py-4 rounded-full shadow-2xl active:scale-95 transition-all">
                                                                                                                                                                                                                                FORÇAR SAÍDA DE ROTA
                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                            }