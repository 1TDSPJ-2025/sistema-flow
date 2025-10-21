import Card from "../../components/Card/Card";
import Title from "../../components/H1Title/Title"
import infos from "../../api/db.json"

export default function Home(){
    document.title = "Home";

    return(
        <main>
            <Title text="Site de Registro pessoas"/>

            <section>
                {infos.usuarios.map(info=>(
                    <Card key={info.id} nome={info.nome} 
                    nomeUser={info.nomeUser} 
                    email={info.email} 
                    avatar={info.avatar}
                    />
                ))}
                
            </section>
        </main>
    );
}