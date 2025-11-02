import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sucesso() {
  const navigate = useNavigate();
  const [primeiroNome, setPrimeiroNome] = useState("");

  useEffect(() => {
    document.title = "Sucesso";

    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
      const dados = JSON.parse(usuario);
      const nomeCompleto = dados.nomeCompleto || dados.nome || "usuário";
      const primeiro = nomeCompleto.trim().split(" ")[0];
      setPrimeiroNome(primeiro);}}, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-blue-50 px-4 py-12">
      <div className="pagamento-container max-w-md w-full flex justify-center items-center">
        <div className="formularios w-full bg-gradient-to-b from-blue-800 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-lg border border-blue-700/50 flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold text-white">✅ Sucesso!</h1>
          <p className="text-blue-100 text-sm">
            Olá <span className="font-semibold text-white">{primeiroNome}</span>, seja bem-vindo(a) ao Sistema Flow da 1TDSPJ! Seu login foi realizado com sucesso.
          </p>
          <button
            onClick={() => navigate("/")}
            className="botaoenviar w-full text-center font-semibold">Voltar para o início
          </button>
        </div>
      </div>
    </main>
  );
}
