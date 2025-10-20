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
    <div className="pagamento-container">
      <form onSubmit={handleSubmit(onSubmit)} className="formularios">
        <h1>💳 Pagamento Seguro</h1>
       
        <input
          type="text"
          placeholder="Nome no cartão"
          className="inputlogcad"
          {...register("nome")}
        />