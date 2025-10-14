type Titulo = {
    text:string
}
export default function Title({text}:Titulo){
    return(
        <h1>{text}</h1>
    )
}