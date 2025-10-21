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
        <main>
            <h1>Login</h1>
            <div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                          
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "O email é obrigatório",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Formato de email inválido",
                                    },
                                })}
                            />
                          {errors.email && <p>{errors.email.message}</p>}
                        </div>

                        <div>
                            <label>Senha</label>
                            <input
                                type="password"
                                {...register("senha", {
                                    required: "A senha é obrigatória",
                                    minLength: {
                                        value: 8,
                                        message: "A senha deve ter pelo menos 8 caracteres",
                                    },
                                })}
                            />
                          {errors.senha && <p>{errors.senha.message}</p>}
                        </div>
                          
                        <div>
                          <button type="submit">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );


}