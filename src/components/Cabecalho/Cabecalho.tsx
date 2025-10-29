import Menu from "../Menu/Menu";

export default function Cabecalho() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="flex flex-col items-center justify-center py-6 space-y-4">
        <h1 className=" text-2xl">
          Projeto Git Flow 1TDSPJ - 2025
        </h1>
        <Menu />
      </div>
    </header>
  );
}