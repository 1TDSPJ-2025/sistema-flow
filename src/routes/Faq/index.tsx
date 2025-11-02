import Title from "../../components/H1Title/Title";

export default function Faq() {
    document.title = "FAQ";

    return (
        <main className="w-full p-4">
            <Title text="Perguntas Frequentes" />

            <section className="space-y-3">
                <details>
                    <summary className="cursor-pointer font-semibold">1. Como adiciono um novo usuário?</summary>
                    <p>Use o formulário de cadastro disponível na página de registro. Preencha os campos obrigatórios e envie.</p>
                </details>

                <details>
                    <summary className="cursor-pointer font-semibold">2. Onde encontro os avatares usados no site?</summary>
                    <p>Os avatares ficam na pasta pública do projeto. Referências de caminho estão nos registros do db.json (ex.: /sistema-flow/avatar1.jpeg).</p>
                </details>

                <details>
                    <summary className="cursor-pointer font-semibold">3. O que fazer se um card não aparecer?</summary>
                    <p>Verifique se a API está acessível e se os dados retornados incluem os campos esperados (nome, nomeUser, email, avatar).</p>
                </details>

                <details>
                    <summary className="cursor-pointer font-semibold">4. Como posso alterar o texto do título da página?</summary>
                    <p>O componente Title recebe uma prop text. Altere o valor passado na rota ou no componente que renderiza a página.</p>
                </details>
            </section>
        </main>
    );
}
