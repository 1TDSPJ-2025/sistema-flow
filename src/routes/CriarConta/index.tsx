export default function CriarConta(){

    type CadastroData = {
    nome: string;
    nomeUsuario: string;
    email: string;
    };

    export default function Cadastro() {
      const { register, handleSubmit, formState: { errors } } = useForm<CadastroData>();
      const navigate = useNavigate();

      const onSubmit = async (data: CadastroData) => {
        const res = await fetch(`http://localhost:3000/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`);

        const users: Usuario[] = await res.json();
        const usuarioExistente = users.find(


          (u) => u.nomeUsuario === data.nomeUsuario || u.email === data.email
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
                                <input type="text" {...register("senha", { required: "Senha é obrigatório" })} />
                                {errors.senha && <p>{errors.senha.message}</p>}
                            </div>
            
                            <div>
                                <label>Email</label>
                                <input type="email" {...register("email", {required: "Email obrigatório",pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }})}/>
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

}