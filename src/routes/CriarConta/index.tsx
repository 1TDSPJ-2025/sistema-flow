import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../type/tipoUsuario";

type CriarData = {
    nome: string;
    senha: string;
    email: string;
    };


export default function CriarConta(){

    
    const { register, handleSubmit, formState: { errors } } = useForm<CriarData>();
    const navigate = useNavigate();


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
        <main>
            <h1>Cadastro</h1>
        
            <div> 
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Nome</label>
                            <input type="text" {...register("nome", { required: "Nome obrigatório" })} />
                            {errors.nome && <p>{errors.nome.message}</p>}
                        </div>
        
                        <div>
                            <label>Senha</label>
                            <input type="password" {...register("senha", { required: "Senha é obrigatório" })} />
                            {errors.senha && <p>{errors.senha.message}</p>}
                        </div>
        
                        <div>
                            <label>Email</label>
                            <input type="email" {...register("email", {required: "Email obrigatório",
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }})}/>
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
        
                        <div >
                            <button type="submit">Cadastrar</button>
                        </div>
        
                    </form>
                </div>
            </div>
        </main>
        
    );
}

