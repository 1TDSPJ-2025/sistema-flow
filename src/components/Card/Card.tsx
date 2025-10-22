interface CardProps {
  nome: string;
  nomeUser: string;
  email: string;
  avatar: string;
}

export default function Card({ nome, nomeUser, email, avatar}: CardProps) {
    return (
        <div className="bg-gray-950 text-rose-600 m-2 border-6 border-gray-950 border-b-rose-700 ml-320 mr-5">
           <p>{nome}</p>
           <p>{nomeUser}</p>
           <p>{email}</p>
           <img src={avatar} alt="noticia aqui" />
        </div>
    );
}
