import { useState } from "react";

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pagamento enviado!");
}
export default function Pagamento(){
    document.title = "Pagamento";
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome no cartão" />
                <input type="text" placeholder="Número do cartão" />
                <input type="text" placeholder="CVV" />
                <button type="submit">Pagar</button>
            </form>
        </div>
    );


}