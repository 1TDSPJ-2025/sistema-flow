import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Title from "../../components/H1Title/Title";


interface CardProps {
    nome: string;
    nomeUser: string;
    email: string;
    avatar: string;
}

export default function Home() {
    document.title = "Home";
    
    
    const [usuarios, setUsuarios] = useState<CardProps[]>([]);
 

    useEffect(() => {
        fetch('http://localhost:5000/usuarios') 
            .then(response => response.json()) 
            .then(data => {
                setUsuarios(data); 
                  
            });
    }, []); 

    return (
        <main>
            <Title text="Site de Registro pessoas" />

            <section>
                {usuarios.map(info => (
                    <Card  
                        nome={info.nome} 
                        nomeUser={info.nomeUser} 
                        email={info.email} 
                        avatar={info.avatar} 
                    />
                ))}
            </section>
        </main>
    );
}
