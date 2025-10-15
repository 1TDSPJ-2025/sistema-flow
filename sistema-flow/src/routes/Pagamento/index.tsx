import { useEffect } from "react";
import { useForm } from "react-hook-form";
 
type FormData = {
  nome: string;
  numeroCartao: string;
  validade: string;
  cvv: string;
  cpf: string;
};
 
export default function Pagamento() {
  const { register, handleSubmit } = useForm<FormData>();
 
  useEffect(() => {
    document.title = "Pagamento";
  }, []);
 
  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    alert("Pagamento enviado!");
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Pagamento</h1>
 
        <input
          type="text"
          placeholder="Nome no cartão"
          {...register("nome")}
        />
 
        <input
          type="text"
          placeholder="Número do cartão"
          {...register("numeroCartao")}
        />
 
        <input
          type="text"
          placeholder="Data de validade"
          {...register("validade")}
        />
 
        <input
          type="text"
          placeholder="CVV"
          {...register("cvv")}
        />
 
        <input
          type="text"
          placeholder="CPF do titular"
          {...register("cpf")}
        />
 
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}