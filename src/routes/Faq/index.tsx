import Title from "../../components/H1Title/Title";

export default function Faq() {
    document.title = "FAQ";

    return (
        <main className="w-full p-4">
            <Title text="Perguntas Frequentes" />

            <section className="space-y-3 faq-section">
                <details>
                    <summary className="cursor-pointer font-semibold">1. Como faço para comprar um produto no site?</summary>
                    <p>Escolha o produto que deseja, adicione ao carrinho e siga para o checkout. Verifique endereço e quantidade antes de finalizar. Após a confirmação, você receberá um e-mail com os detalhes do pedido.</p>
                </details>

                <details>
                    <summary className="cursor-pointer font-semibold">2. Quais formas de pagamento são aceitas?</summary>
                    <p>Normalmente aceitamos cartão de crédito, débito, PIX e boleto (dependendo do fluxo). No checkout você verá as opções disponíveis e instruções para completar o pagamento.</p>
                </details>

                <details>
                    <summary className="cursor-pointer font-semibold">3. O pagamento falhou — o que devo fazer?</summary>
                    <p>Verifique os dados do cartão (número, validade, CVV) e o saldo/limite. Tente novamente ou escolha outra forma de pagamento. Se o erro persistir, contate o suporte informando o erro exibido e o horário da tentativa.</p>
                </details>

                <details>
                    <summary className="cursor-pointer font-semibold">4. Esqueci minha senha / não consigo fazer login — como recuperar?</summary>
                    <p>Na página de login use "Esqueci minha senha" para receber um link de restauração por e-mail. Verifique também se você confirmou o cadastro via e-mail. Se não receber o e-mail, cheque a pasta de spam ou solicite reenvio.</p>
                </details>
            </section>
        </main>
    );
}
