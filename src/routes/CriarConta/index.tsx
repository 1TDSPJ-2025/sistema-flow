import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../type/tipoUsuario";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type CriarData = {
    nomeCompleto: string;
    nomeUsuario: string;
    email: string;
    senha: string;
    };


export default function CriarConta(){

    
    
    const { register, handleSubmit, formState: { errors } } = useForm<CriarData>();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = "Criar Conta";
    }, []);


    const onSubmit = async (data: CriarData) => {
      const res = await fetch(`http://localhost:3000/usuarios?email=${data.email}`);
      const users: Usuario[] = await res.json();

      const usuarioExistente = users.find(
        (u) => u.email === data.email
      );
      if (usuarioExistente) {
        alert("Nome de usuário ou email já cadastrado");
        return;
      }
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      alert("Cadastro realizado com sucesso");
      navigate("/login");
    };
    return(
        <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-blue-50 px-4 py-12">
      <div className="pagamento-container max-w-2xl w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="formularios w-full bg-gradient-to-b from-blue-800 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-lg border border-blue-700/50 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-center mb-4 text-white">Cadastro</h1>
          <p className="text-center text-blue-100 text-sm mb-4">Crie sua conta no Sistema-Flow</p>
          <input
            type="text"
            placeholder="Nome completo"
            className="inputlogcad"
            {...register("nomeCompleto", { required: "Nome completo é obrigatório" })}/>
          {errors.nomeCompleto && (<p className="text-red-500 text-sm">{errors.nomeCompleto.message}</p>)}
          <input
            type="text"
            placeholder="Nome de usuário"
            className="inputlogcad"
            {...register("nomeUsuario", { required: "Nome de usuário é obrigatório" })}/>
          {errors.nomeUsuario && (<p className="text-red-500 text-sm">{errors.nomeUsuario.message}</p>)}
          <input
            type="email"
            placeholder="Email"
            className="inputlogcad"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email inválido",
              },})}/>
          {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              className="inputlogcad pr-12"
              {...register("senha", {
                required: "Senha é obrigatória",
                minLength: {
                  value: 8,
                  message: "A senha deve ter pelo menos 8 caracteres",
                },})}/>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white">
              {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
            </button>
          </div>
          {errors.senha && (<p className="text-red-500 text-sm">{errors.senha.message}</p>)}
          <button type="submit" className="botaoenviar">
            Criar Conta
          </button>
        </form>
      </div>
    </main>
  );
}

