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
            
        </header>
    )
}