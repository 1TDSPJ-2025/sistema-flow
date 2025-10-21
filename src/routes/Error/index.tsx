export default function Error() {
 document.title = "404";
 const mainStyle = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   minHeight: '100vh',
   textAlign: 'center',
   backgroundColor: '#f8f8f8', // Cor de fundo suave
   color: '#333', // Cor do texto
   padding: '20px',
 };
 const headerStyle = {
   fontSize: '2.5em', // Tamanho da fonte maior
   color: '#d9534f', // Uma cor de erro (vermelho)
   marginBottom: '10px',
 };
 return (
<main style={mainStyle}>
<h1 style={headerStyle}>
       Error 404 Not Found - Página não encontrada
</h1>
     {/* Você pode adicionar um link para a página inicial aqui */}
<p>A página que você está procurando não existe ou foi movida.</p>
<a href="/" style={{ color: '#007bff', textDecoration: 'underline' }}>Voltar para a Home</a>
</main>
 );
}