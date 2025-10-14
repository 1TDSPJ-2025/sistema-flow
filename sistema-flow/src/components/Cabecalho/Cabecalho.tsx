import Menu from "../Menu/Menu";
import { useEffect, useState } from "react";

export default function Cabecalho(){
    const [clima, setClima] = useState("Carregando clima...")


    useEffect(() => {
     async function buscarDados() {
        const chave = "CHAVE_API_WEATHER_MAP";
        const cidade = "São Paulo";

        const respostaClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt_br`)
        const dadosClima = await respostaClima.json();
    
        const temperatura = dadosClima.main.temp.toFixed(1);  
        const descricao = dadosClima.weather[0].description; 

    setClima(`${cidade}: ${temperatura}°C, ${descricao}`)
    }

        buscarDados();
    }, []);

    return(
        <header>
        <h1>Projeto Git Flow 1TDSJP - 2025</h1>   
          <div>
        🌡️ {clima} <br/>
          </div>
        
            <Menu/>
        </header>     
    ); 
}