import { useForm } from "react-hook-form";

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

    const onSubmit = async (data: LoginData) => {

        const res = await fetch(
            `http://localhost:3000/usuarios?email=${data.email}`
        );
    const users = await res.json();

        if (users.length > 0) {
        localStorage.setItem("usuarioLogado", JSON.stringify(users[0]));
        setUser(users[0]);
        navigate("/Saida"); 
        } else {
            alert("Usuário ou email inválido!");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-blue-300 p-5">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Login</h1>
                    <p className="text-gray-600 text-sm">Acesse sua conta na 1TDSPJ Farma</p>
                </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                          
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "O email é obrigatório",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Formato de email inválido",
                                    },   
                                })}
                                className="w-full px-4 py-3 rounded-lg border-2 bg-gray-50 transition-all outline-none focus:bg-white border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                            />
                          {errors.email && <p className="text-red-500 text-sm flex items-center gap-1">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-gray-700">Senha</label>
                            <input
                                type="password"
                                {...register("senha", {
                                    required: "A senha é obrigatória",
                                    minLength: {
                                        value: 8,
                                        message: "A senha deve ter pelo menos 8 caracteres",
                                    },
                                })}
                                className="w-full px-4 py-3 rounded-lg border-2 bg-gray-50 transition-all outline-none focus:bg-white border-gray-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                            />
                          {errors.senha && <p className="text-red-500 text-sm flex items-center gap-1">{errors.senha.message}</p>}
                        </div>
                          
                        <div>
                          <button type="submit" className="w-full bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-cyan-600 ">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );


}