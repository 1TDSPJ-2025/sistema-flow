import Card from "../../components/Card/Card";
import Title from "../../components/H1Title/Title"

export default function Home(){
    document.title = "Home";

    return(
        <main>
            <Title text="Site de Registro pessoas"/>

            <section>
                <Card/>
            </section>
        </main>
    );
}