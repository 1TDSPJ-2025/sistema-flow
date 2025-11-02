import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Title from "../../components/H1Title/Title";

const API_USU = (import.meta.env.VITE_API_URL_ENDPOINT_USUARIOS as string) ?? "/db.json";

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
        const fetchData = async () => {
            try {
                const response = await fetch(API_USU);
                if (!response.ok) {
                    console.error("Erro ao buscar usuários:", response.statusText);
                    setUsuarios([]);
                    return;
                }

                const data = await response.json();

                const rawArray = Array.isArray(data) ? data : data?.usuarios ?? [];

                const normalized = rawArray.map((u: any) => ({
                    nome: u.nome ?? u.nomeCompleto ?? "Sem nome",
                    nomeUser: u.nomeUser ?? u.nomeUsuario ?? "",
                    email: u.email ?? "",
                    avatar: u.avatar ?? u.foto ?? "/sistema-flow/default-avatar.png"
                }));

                setUsuarios(normalized);
            } catch (err) {
                console.error("Erro ao buscar usuários:", err);
                setUsuarios([]);
            }
        };
        fetchData();
    }, []); 

    return (
        <main className="w-full">
            <Title text="Site de Registro pessoas" />

            <section>
                {usuarios.map((info, indice) => (
                    <div key={info.nomeUser || indice}>
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
