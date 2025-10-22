import CardProdutos from "../../components/CardProduto/CardProduto";
import Title from "../../components/H1Title/Title";
import infos from "../../api/db.json";
 
export default function Produto() {
  document.title = "Produtos";
 
  return (
<main>
<Title text="Lista de Produtos" />
 
      <section>
        {infos.produtos.map((produto) => (
<CardProdutos
            key={produto.id}
            nome={produto.nome}
            categoria={produto.categoria}
            preco={produto.preco}
            imagem={produto.imagem}
            descricao={produto.descricao}
          />
        ))}
</section>
</main>
  );
}