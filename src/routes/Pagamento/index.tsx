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
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    document.title = "Pagamento";
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    alert("Pagamento realizado com sucesso!");
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-blue-50 px-4 py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="formularios w-full max-w-2xl bg-gradient-to-b from-blue-800 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-lg border border-blue-700/50 flex flex-col gap-6"
      >
        <h1 className="text-3xl font-bold text-center mb-4 text-white">
          💳 Pagamento Seguro
        </h1>

        <input
          type="text"
          placeholder="Nome no cartão"
          className="inputlogcad"
          {...register("nome", { 
            required: "Nome no cartão é obrigatório",
            pattern: {
              value: /^[A-Za-zÀ-ÿ\s]+$/,
              message: "Nome deve conter apenas letras"
            }
          })}
        />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

        <input
          type="text"
          placeholder="Número do cartão"
          className="inputlogcad"
          {...register("numeroCartao", { 
            required: "Número do cartão é obrigatório",
            pattern: {
              value: /^[0-9]{16}$/,
              message: "Número do cartão deve ter 16 dígitos"
            }
          })}
        />
        {errors.numeroCartao && <p className="text-red-500 text-sm">{errors.numeroCartao.message}</p>}

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Data de validade (MM/AA)"
              className="inputlogcad w-full"
              {...register("validade", { 
                required: "Data de validade é obrigatória",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                  message: "Use o formato MM/AA"
                }
              })}
            />
            {errors.validade && <p className="text-red-500 text-sm">{errors.validade.message}</p>}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="CVV"
              className="inputlogcad w-full"
              {...register("cvv", { 
                required: "CVV é obrigatório",
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: "CVV deve ter 3 dígitos"
                }
              })}
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv.message}</p>}
          </div>
        </div>

        <input
          type="text"
          placeholder="CPF do titular"
          className="inputlogcad"
          {...register("cpf", { 
            required: "CPF é obrigatório",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "CPF deve ter 11 dígitos"
            }
          })}
        />
        {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}

        <button
          type="submit"
          className="botaoenviar w-full text-center font-semibold"
        >
          Confirmar Pagamento
        </button>
      </form>
    </main>
  );
}
