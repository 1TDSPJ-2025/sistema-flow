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
    <main className="h-[100vh] w-[100vw]">
    <div className="pagamento-container">
      <form onSubmit={handleSubmit(onSubmit)} className="formularios">
        <h1>💳 Pagamento Seguro</h1>
       
        <input
          type="text"
          placeholder="Nome no cartão"
          className="inputlogcad"
          {...register("nome")}
        />
        <input
          type="text"
          placeholder="Número do cartão"
          className="inputlogcad"
          {...register("numeroCartao")}
        />
 
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Data de validade"
            className="inputlogcad flex-1"
            {...register("validade")}
          />
 
          <input
            type="text"
            placeholder="CVV"
            className="inputlogcad"
            style={{ width: '100px' }}
            {...register("cvv")}
          />
        </div>
 
        <input
          type="text"
          placeholder="CPF do titular"
          className="inputlogcad"
          {...register("cpf")}
        />
 
        <button type="submit" className="botaoenviar">
          Confirmar Pagamento
        </button>
      </form>
    </div>
    </main>
  );
}
 
