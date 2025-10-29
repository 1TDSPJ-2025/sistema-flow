import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Title from "../../components/H1Title/Title";

const API_USU= import.meta.env.VITE_API_URL_ENDPOINT_USUARIOS


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
        
        const fetchData =async()=>{
            const response = await fetch(API_USU);

            const data = await response.json();

            setUsuarios(data);
        }
        fetchData();

    }, []); 

    return (
        <main className="w-full">
            <Title text="Site de Registro pessoas" />

            <section>
                {usuarios.map((info, indice) => (
                    < div key={indice} >
                    <Card  
                        nome={info.nome} 
                        nomeUser={info.nomeUser} 
                        email={info.email} 
                        avatar={info.avatar} 
                    />
                    </div>
                ))}
            </section>
        </main>
    );
}
