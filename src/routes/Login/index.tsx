import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Provinder/Provinder";

type LoginData = {
        email: string;
        senha: string;
    }

export default function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>();
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        document.title = "Login";
    }, []);

    const onSubmit = async (data: LoginData) => {

        const res = await fetch(
            `http://localhost:3000/usuarios?email=${data.email}`);
    const users = await res.json();

        if (users.length > 0) {
        localStorage.setItem("usuarioLogado", JSON.stringify(users[0]));
        setUser(users[0]);
        navigate("/sucesso"); 
        } else {
            alert("Usuário ou email inválido!");
        }
    };

    return (
        <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-blue-50 px-4 py-12">
            <div className="pagamento-container max-w-2xl w-full flex justify-center items-center"> 
                    <form onSubmit={handleSubmit(onSubmit)} className="formularios w-full bg-gradient-to-b from-blue-800 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-lg border border-blue-700/50 flex flex-col gap-6">
                        <h1 className="text-3xl font-bold text-center mb-4 text-white">Login</h1>
                        <p className="text-center text-blue-100 text-sm mb-4">Acesse sua conta na 1TDSPJ Sistema-Flow</p>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-blue-100">Email</label>
                            <input
                                type="email"
                                placeholder="E-mail"
                                className="inputlogcad"
                                {...register("email", {
                                    required: "O email é obrigatório",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Formato de email inválido",
                                    },   
                                })}
                            />
                          {errors.email && <p className="text-red-500 text-sm flex items-center gap-1">{errors.email.message}</p>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-blue-100">Senha</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Senha"
                                        className="inputlogcad"
                                        {...register("senha", {
                                            required: "A senha é obrigatória",
                                            minLength: {
                                                value: 8,
                                                message: "A senha deve ter pelo menos 8 caracteres",
                                            },
                                        })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white">
                                        {showPassword ? (<AiOutlineEyeInvisible size={20} />) : (<AiOutlineEye size={20} />)}
                                    </button>
                                    {errors.senha && <p className="text-red-500 text-sm flex items-center gap-1">{errors.senha.message}</p>}
                                </div>
                            </div>
                        <div>
                          <button type="submit" className="botaoenviar">Entrar</button>
                        </div>
                    </form>
            </div>
        </main>
    );
}