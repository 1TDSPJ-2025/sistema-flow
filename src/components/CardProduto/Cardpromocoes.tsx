import React, { useEffect, useState } from "react";

type Produto = {
  id: number,
  nome: string,
  descricao: string,
  preco: number,
  precoPromocional: number,
  validadePromocao: string,
  imagem?: string
}

export default function CardsPromocoes() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/produtos")
      .then(resposta => resposta.json())
      .then(dados => {
        const produtosPromocao = dados.filter((produto: any) => produto.precoPromocional < produto.preco);
        setProdutos(produtosPromocao);
      })
      .catch(() => setProdutos([]));
  }, []);
  
if (produtos.length === 0) {
    return <p>Não há promoções no momento.</p>
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {produtos.map(produto => (
        <div key={produto.id} className="border border-gray-300 rounded-lg p-3 w-56 bg-gray-100 flex flex-col items-center">
          {produto.imagem && (
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-28 object-cover rounded-md mb-3"
            />
          )}
          <h2 className="font-semibold text-lg mb-1">{produto.nome}</h2>
          <p className="mb-1">{produto.descricao}</p>
          <p className="line-through text-red-700 mb-1">De: R$ {produto.preco}</p>
          <p className="text-green-700 font-bold mb-1">Por: R$ {produto.precoPromocional}</p>
          <p className="text-xs">Promoção até: {produto.validadePromocao}</p>
        </div>
      ))}
    </div>
  );
}