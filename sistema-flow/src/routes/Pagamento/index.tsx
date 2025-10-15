

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pagamento enviado!");
}
export default function Pagamento(){
    document.title = "Pagamento";
    return(
        <div>
           <form onSubmit={handleSubmit}>
                <h1 >Pagamento</h1>
                <input
                    type="text"
                     placeholder="Nome no cartão"
                 />
                 <input
                    type="text"
                    placeholder="Número do cartão"
                />
                <input
                    type="text"
                    placeholder="Data de validade"
                />
                <input
                    type="text"
                    placeholder="CVV"
                />
                <input type="text"
                placeholder="CPF do titular" />
                <button type="submit">Pagar</button>
            </form>
        </div>
    );


}