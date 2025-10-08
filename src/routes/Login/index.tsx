import Form from "../../components/Form";
import type { TipoUsuario } from "../../types/tipoUsu";
import { Link, useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL_BASE;
 
 
export default function Login() {
 
    const navigate = useNavigate();
 
    const onSubmit = async (data: TipoUsuario) => {
        try {
            const response = await fetch(`${API_URL}`);
 
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
 
            
 
            
        } catch (error) {
            console.error('Falha no login:', error);
            alert('Ocorreu um erro ao tentar fazer login.');
        }
 
 
    };
 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
        </div>
    )
}