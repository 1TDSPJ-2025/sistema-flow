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
}