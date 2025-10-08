import { Link, useNavigate } from "react-router-dom"
import type { TipoUsuario } from "../../types/tipoUsu";
import Form from "../../components/Form";
const API_URL = import.meta.env.VITE_API_URL_BASE;
 
 
export default function Cadastro() {
 
    const navigate = useNavigate();
 
    const onSubmit = async (data: TipoUsuario) => {
        try{
            const response = await fetch (`${API_URL}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários existentes');
            }
 
            const usuarios: TipoUsuario[] = await response.json();
 
            const usuarioExistente = usuarios.some(usuario =>
                usuario.nomeUsuario === data.nomeUsuario || usuario.email === data.email
            );
 
            if (usuarioExistente) {
                alert("Nome de usuário ou e-mail já cadastrado");
                return;
            }
 
            
        } catch (error) {
            console.error("Falha no cadastro", error);
            alert("Ocorreu um erro ao tentar cadastrar.");
        }
    }
 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
        </div>
    )
}