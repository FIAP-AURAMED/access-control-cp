import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import type { TipoUsuario } from "../../types/tipoUsu";
 
 
export default function Home() {
 
    const [usuario, setUsuario] = useState<TipoUsuario | null>(null);
 
    const navigate = useNavigate();
 
    useEffect(() => {
        const usuarioLogado = sessionStorage.getItem('usuarioLogado');
 
        if (usuarioLogado) {
            setUsuario(JSON.parse(usuarioLogado));
        } else {
            alert("Acesso não autorizado. Por favor, faça o login.");
            navigate("/");
        }
    }, [navigate]);
 
    const handleLogout = () => {
        sessionStorage.removeItem('usuarioLogado');
        navigate("/");
    }
 
    if (!usuario) {
        return null
    }
 
 
    return (
        <header className="flex flex-col min-h-screen bg-gray-50">
            <div className="flex items-center justify-between w-full p-8 mx-auto bg-pink-700 shadow-lg">
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Bem-vindo, {usuario.nome}!
                    </h1>
                    <p className="mt-2 text-white">Seu e-mail de acesso é: {usuario.email}</p>
                </div>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Sair
                </button>
            </div>
        </header>
    )
}