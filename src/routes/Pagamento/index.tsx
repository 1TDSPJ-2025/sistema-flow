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
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-blue-50 px-4 py-12">
      <div className="pagamento-container max-w-2xl w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="formularios w-full bg-gradient-to-b from-blue-800 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-lg border border-blue-700/50 flex flex-col gap-6"
        >
          <h1 className="text-3xl font-bold text-center mb-4 text-white">
            💳 Pagamento Seguro
          </h1>

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

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Data de validade"
              className="inputlogcad flex-1"
              {...register("validade")}
            />
            <input
              type="text"
              placeholder="CVV"
              className="inputlogcad sm:w-28 w-full"
              {...register("cvv")}
            />
          </div>

          <input
            type="text"
            placeholder="CPF do titular"
            className="inputlogcad"
            {...register("cpf")}
          />

          <button
            type="submit"
            className="botaoenviar w-full text-center font-semibold"
          >
            Confirmar Pagamento
          </button>
        </form>
      </div>
    </main>
  );
}
