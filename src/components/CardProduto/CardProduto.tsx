interface CardProps {
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  descricao: string;
}

export default function CardProdutos({ nome, categoria, preco, imagem, descricao }: CardProps) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Categoria: {categoria}</p>
      <p>Preço: R$ {preco.toFixed(2)}</p>
      <img src={imagem} alt={nome} />
      <p>{descricao}</p>
    </div>
  );
}
