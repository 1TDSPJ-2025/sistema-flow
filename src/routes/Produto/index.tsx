import Title from "../../components/H1Title/Title";

export default function Produto() {
  document.title = "Produtos";

  return (
    <main>
      <Title text="Lista de Produtos" />

      <section>
        <p>Refazer</p>
      </section>
    </main>
  );
}