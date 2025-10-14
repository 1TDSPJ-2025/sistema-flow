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

          alert("Nome de usuário ou email já cadastrado!");
          return;
        }

        await fetch("http://localhost:3000/usuarios", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)

          
        });

        alert("Cadastro realizado com sucesso!");
        navigate("/login");
      };

        return(
            
        );
    }

}