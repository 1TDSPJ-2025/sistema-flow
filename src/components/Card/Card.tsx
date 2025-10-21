interface CardProps {
  nome: string;
  nomeUser: string;
  email: string;
  avatar: string;
}

export default function Card({ nome, nomeUser, email, avatar }: CardProps) {
    return (
        <div>
           <p>{nome}</p>
           <p>{nomeUser}</p>
           <p>{email}</p>
           <img src={avatar} alt="noticia aqui" />
        </div>
    );
}
